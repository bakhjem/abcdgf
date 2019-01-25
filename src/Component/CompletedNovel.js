import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCompleteNovel } from "../Action/NovelActions";

class CompletedNovel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.completenovel !== prevProps.completenovel){
            this.setState({data: this.props.completenovel.data})
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
                    to={'/truyenhoanthanh/'+this.props.completenovel.page}
                  >
                    <span itemProp="title">Truyện hoàn thành</span>
                  </Link>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'/truyenhoanthanh/'+this.props.completenovel.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>Trang {this.props.completenovel.page}
              </p>
            </div>
          </div>
        </div>
        <div className="wrap_update tab_anh_dep danh_sach" style={{ marginBottom: 10}}>
        {this.state.data.map(data => (
            <div className="update_item list_category" title={data.tentruyen}>
            <Link rel="nofollow" to={'/truyen/'+data.idtruyen +'/page/1'} title={'/truyen/'+data.tentruyen}>
              <img src={data.cover} alt={data.tentruyen} title={data.tentruyen} />
            </Link>
            <h3 className="nowrap">
              <Link to={'/truyen/'+data.idtruyen +'/page/1'} title={data.tentruyen} >{data.tentruyen} </Link>
            </h3>
            <Link to={'#'} title={data.chuongmoi} className="chapter">{data.chuongmoi}</Link>
            <span>{data.timeupdate}</span>
            <span>Tác giả : {data.tacgia}</span>
          </div>
        ))}
        <div className="clearfix"></div>
        </div>
        <div className="phan-trang">
        {this.props.completenovel.page !== this.props.completenovel.totalpage &&
        <a href={'/truyenhoanthanh/page/'+(parseInt(this.props.completenovel.page)+1)} class="quantitychapter">Trang Sau</a>
        }
        {this.props.completenovel.page !== 1 &&
        <a href={'/truyenhoanthanh/page/'+(parseInt(this.props.completenovel.page)-1)} class="page">Trang Trước</a>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    completenovel: state.Home.completenovel,
  }),
  { fetchCompleteNovel }
)(CompletedNovel);
