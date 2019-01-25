import React, { Component } from "react";
import Header from '../Component/Header';
import Home from '../Component/Home';
import TopWeakeNovel from '../Component/TopWeakeNovel';
import Genres from '../Component/Genres';
import Footer from '../Component/Footer';
import NovelDetail from "../Component/NovelDetail";
import { fetchNovelDetail } from "../Action/NovelActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

class NovelContainer extends Component {
    constructor(props) {
        super(props);
        
    }
    initializeReactGA() {
      ReactGA.initialize('UA-132843894-1');
      ReactGA.pageview(`/truyen/${this.props.match.params.id}/page/1`);
    }
    componentDidMount() {
        let params = {
          truyen: this.props.match.params.slug,
          page: this.props.match.params.id
        }
        this.props.fetchNovelDetail(params);
        window.scrollTo(0,0);
        this.initializeReactGA();
    }
    
  render() {
      console.log(this.props)
    return (
      <div>
        <Helmet>
          <title>{`Read ${this.props.noveldetail.tentruyen}`}</title>
          <meta name="description" content={this.props.noveldetail.mota} />
          <meta name="theme-color" content="#008f68" />
          <meta name="keywords" content="Novel updates, Free books online, Light Novel, Read light novel, Light novel translations, Free Novels Online" />
        </Helmet>
        <Header />
        <div id="main_body">
            <NovelDetail></NovelDetail>
          <div className="cotphai">
            <TopWeakeNovel />
            <Genres />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
    state => ({
      noveldetail: state.Home.noveldetail
    }),
    { fetchNovelDetail }
  )(NovelContainer);