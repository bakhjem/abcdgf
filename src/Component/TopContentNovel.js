import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNovelDetail } from "../Action/NovelActions";

class TopContentNovel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datanovel: []
    }
  }
  componentDidMount() {
    let params = {
      id: this.props.match.params.id
    };
    this.props.fetchNovelDetail(params);
  }
  componentDidUpdate(prevProps, prevState) {
      if(this.props.noveldetail !== prevProps.noveldetail){
          this.setState({datanovel: this.props.noveldetail})
      }
  }
  

  render() {
    return (
      <div>
        <div className="cotgiua">
          <div className="hfeed truyen_info_wrapper">
            <div className="breadcrumb breadcrumbs">
              <div className="rdfa-breadcrumb">
                <div>
                  <p>
                    <span className="breadcrumbs-title" />
                    <span
                      itemScope
                      itemType="http://data-vocabulary.org/Breadcrumb"
                    >
                      <a
                        itemProp="url"
                        href="/"
                        className="home"
                        title="Đọc truyện online"
                      >
                        <span itemProp="title">Đọc truyện online</span>
                      </a>
                    </span>
                    <span className="separator">»</span>
                    <span
                      itemScope
                      itemType="http://data-vocabulary.org/Breadcrumb"
                    >
                      <a
                        itemProp="url"
                        href={'/truyen/'+this.state.datanovel.idtruyen+'/page/1'}
                        title={this.state.novelsname}
                      >
                        <span itemProp="title">{this.state.novelsname}</span>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    noveldetail: state.Home.noveldetail
  }),
  { fetchNovelDetail }
)(TopContentNovel);
