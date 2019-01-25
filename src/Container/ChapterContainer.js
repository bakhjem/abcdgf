import React, { Component } from "react";
import Header from '../Component/Header';
import Home from '../Component/Home';
import TopWeakeNovel from '../Component/TopWeakeNovel';
import Genres from '../Component/Genres';
import Footer from '../Component/Footer';
import NovelDetail from "../Component/NovelDetail";
import { fetchNovelChapter,fetchNovelDetail } from "../Action/NovelActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Chapter from "../Component/Chapter";
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

class ChapterContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    initializeReactGA() {
        ReactGA.initialize('UA-132843894-1');
        ReactGA.pageview(`/chuong/${this.props.match.params.id}`);
      }
    componentDidMount() {
        let params = {
            chuong: this.props.match.params.id
        }
        this.props.fetchNovelChapter(params);
        window.scrollTo(0,0);
        this.initializeReactGA();
    }
    
  render() {
      console.log(this.props)
    return (
      <div id='trang_doc'>
      <Helmet>
          <title>{`Đọc ${this.props.novelchapter.tenchuong}`}</title>
          <meta name="description" content={`Đọc truyện ${this.props.novelchapter.tentruyen}  ${this.props.novelchapter.tenchuong} online`}/>
          <meta name="theme-color" content="#008f68" />
          <meta name="keywords" content="Novel updates, Free books online, Light Novel, Read light novel, Light novel translations, Free Novels Online" />
        </Helmet>
        <Header />
        <Chapter></Chapter>
        <Footer />
      </div>
    );
  }
}

export default connect(
    state => ({
        novelchapter: state.Home.novelchapter
    }),
    { fetchNovelChapter,fetchNovelDetail }
  )(ChapterContainer);