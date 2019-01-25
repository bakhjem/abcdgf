import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHotnovel } from "../Action/NovelActions";

class TopviewNovel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.hotnovel !== prevProps.hotnovel){
            this.setState({data: this.props.hotnovel.data})
        }
    }
    
    
    
  render() {
      console.log(this.props);
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
                    to={'/truyenhot/'+this.props.hotnovel.page}
                  >
                    <span itemProp="title">Truyện hay</span>
                  </Link>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'/truyenhot/'+this.props.hotnovel.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>trang {this.props.hotnovel.page}
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
            {/* <span>Last updated : 21-Jan-2019 06:29</span>
            <span>View : 13,396</span> */}
          </div>
        ))}
        <div className="clearfix"></div>
        </div>
        <div className="phan-trang">
        {this.props.hotnovel.page !== this.props.hotnovel.totalpage &&
        <a href={'/truyenhot/page/'+(parseInt(this.props.hotnovel.page)+1)} class="quantitychapter">Trang Sau</a>
        }
        {this.props.hotnovel.page !== 1 &&
        <a href={'/truyenhot/page/'+(parseInt(this.props.hotnovel.page)-1)} class="page">Trang Trước</a>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    hotnovel: state.Home.hotnovel
  }),
  { fetchHotnovel }
)(TopviewNovel);
