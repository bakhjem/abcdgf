import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHome } from "../Action/NovelActions";

class Newupdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.newupdate !== prevProps.newupdate){
            this.setState({data: this.props.newupdate.data})
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
                    title="Read novel online"
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
                    to={'/update/'+this.props.newupdate.page}
                  >
                    <span itemProp="title">Latest</span>
                  </Link>
                </span>
                <span className="separator">»</span>
                <span
                  itemScope
                  itemType="http://data-vocabulary.org/Breadcrumb"
                >
                  <Link
                    itemProp="url"
                    to={'/update/'+this.props.newupdate.page}
                  >
                    <span itemProp="title">All</span>
                  </Link>
                </span>
                <span className="separator">»</span>Trang {this.props.newupdate.page}
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
        {this.props.newupdate.page !== this.props.newupdate.totalpage &&
        <a href={'/update/page/'+(parseInt(this.props.newupdate.page)+1)} class="quantitychapter">Trang sau</a>
        }
        {this.props.newupdate.page !== 1 &&
        <a href={'/update/page/'+(parseInt(this.props.newupdate.page)-1)} class="page">Trang trước</a>
        }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    newupdate: state.Home.newupdate,
  }),
  { fetchHome }
)(Newupdate);
