import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHome } from "../Action/NovelActions";

class genresDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.genresdetail !== prevProps.genresdetail){
            this.setState({data: this.props.genresdetail.data})
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
                    title="Read truyen online"
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
                    to={'/update/'+this.props.genresdetail.page}
                  >
                    <span itemProp="title">Thể loại</span>
                  </Link>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'/update/'+this.props.genresdetail.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>Trang {this.props.genresdetail.page}
              </p>
            </div>
          </div>
        </div>
        <div className="wrap_update tab_anh_dep danh_sach" style={{ marginBottom: 10}}>
        {this.state.data.map(data => (
            <div className="update_item list_category" title={data.tentruyen}>
            <Link rel="nofollow" to={'/truyen/'+data.idtruyen+'/page/1'} title={'/truyen/'+data.tentruyen}>
              <img src={data.cover} alt={data.tentruyen} title={data.tentruyen} />
            </Link>
            <h3 className="nowrap">
              <Link to={'/truyen/'+data.idtruyen+'/page/1'} title={data.tentruyen} >{data.tentruyen} </Link>
            </h3>
            <Link to={'#'} title={data.chuongmoi} className="chapter">{data.chuongmoi}</Link>
            <span>{data.timeupdate}</span>
            <span>Tác giả : {data.tacgia}</span>
          </div>
        ))}
        <div className="clearfix"></div>
        </div>
        <div className="phan-trang">
        {this.props.genresdetail.page !== this.props.genresdetail.totalpage &&
        <a href={'/theloai/'+this.props.genresdetail.idtheloai+'/page/'+(parseInt(this.props.genresdetail.page)+1)} class="quantitychapter">Trang Sau</a>
        }
        {this.props.genresdetail.page !== 1 &&
        <a href={'/theloai/'+this.props.genresdetail.idtheloai+'/page/'+(parseInt(this.props.genresdetail.page)-1)} class="page">Trang Trước</a>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    genresdetail: state.Home.genresdetail,
  }),
  { fetchHome }
)(genresDetail);
