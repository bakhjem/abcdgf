import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../Action/NovelActions";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.search !== prevProps.search){
            this.setState({data: this.props.search.data})
        }
    }
    
    
    
  render() {
    return (
      <div>
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
                  <Link
                    itemProp="url"
                    to={'/search/'+this.props.search.search+'/page/'+this.props.search.page}
                  >
                    <span itemProp="title">Tìm kiếm</span>
                  </Link>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'#'}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>{this.props.search.page} page
              </p>
            </div>
          </div>
        </div>
        <div className="wrap_update tab_anh_dep danh_sach" style={{ marginBottom: 10}}>
        {this.state.data.map(data => (
            <div className="update_item list_category" title={data.tentruyen}>
            <Link rel="nofollow" to={'/truyen/'+data.idtruyen+'/page/1'} title={data.tentruyen}>
              <img src={data.cover} alt={data.tentruyen} title={data.tentruyen} />
            </Link>
            <h3 className="nowrap">
              <Link to={'/truyen/'+data.idtruyen+'/page/1'} title={data.tentruyen} >{data.tentruyen} </Link>
            </h3>
            <Link to={'#'} title={data.chuongmoi} className="chapter">{data.chuongmoi}</Link>
            <span>{data.timeupdate}</span>
            {/* <span>View : 13,396</span> */}
          </div>
        ))}
        <div className="clearfix"></div>
        </div>
        <div className="phan-trang">
        {this.props.search.page !== this.props.search.totalpage &&
        <a href={'/search/'+this.props.search.search+'/page/'+(parseInt(this.props.search.page)+1)} class="quantitychapter">Next page</a>
        }
        {this.props.search.page !== 1 &&
        <a href={'/newnovel/page/'+this.props.search.search+'/page/'+(parseInt(this.props.search.page)-1)} class="page">Pre page</a>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    search: state.Home.search,
  }),
  { fetchSearch }
)(Search);
