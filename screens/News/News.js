import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import dateFormat from 'dateformat';
import SideMenu from '../../components/SideMenu';

const newsUrl =
  'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b4275ca6814546c28b1fef30e93e45c4';

/**
 * This is the news class
 * It is a visual layer
 */
class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  // Pull news articles
  componentDidMount() {
    if (this.state.articles !== 10) {
      fetch(newsUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({articles: data.articles});
          //this.articles = data.articles;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SideMenu navigation={this.props.navigation} />
          <View style={styles.newsContainer}>
            {this.state.articles.map((article, idx) => {
              return (
                <Card style={styles.card} key={idx}>
                  <Text style={{padding: 10, fontWeight: 'bold', fontSize: 16}}>
                    {article.title}
                  </Text>
                  <Text style={{padding: 10}}>{article.description}</Text>
                  <Image
                    style={{padding: 10, width: 150, height: 150}}
                    source={{uri: article.urlToImage}}
                  />
                  <Text style={{padding: 10}}>
                    {dateFormat(
                      new Date(article.publishedAt),
                      'ddd d mmm yyyy ',
                    )}
                  </Text>
                </Card>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 0,
  },
  newsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  card: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default News;
