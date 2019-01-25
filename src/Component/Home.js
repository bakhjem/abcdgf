import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHome,fetchHotnovel } from "../Action/NovelActions";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          docnhieu: []
        }
        
    }
    componentDidMount() {
        let params = {
            page: 1
        }
        this.props.fetchHome(params);
        // this.props.fetchHotnovel(params);
    }
    
    
    
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="cotgiua">
          <div className="cotgiua_menu">
            <Link
              rel="nofollow"
              to={'/updates/page/1'}
              title="RECENTLY UPDATED NOVEL"
              className="head_title actived muc_truyen_moi_cap_nhat"
            >
              Mới Cập Nhật
            </Link>
            <Link
              rel="nofollow"
              to={'/truyenhoanthanh/page/1'}
              title="Truyện hoàn thành"
              className="head_title muc_truyen_hoan_thanh"
            >
              Truyện Hoàn Thành
            </Link>
            <Link
              rel="nofollow"
              to={'/truyenmoi/page/1'}
              title="Truyện mới đăng"
              className="head_title"
            >
              Truyện Mới Đăng
            </Link>
            <Link
              rel="nofollow"
              to={'/truyenhot/page/1'}
              title="Truyện hot"
              className="head_title"
            >
              Truyện Xem Nhiều
            </Link>
          </div>
          <div className="wrap_update home">
            <div className="daily-update">
              <h2 className="title update-title" title="Recently Updated MANGA">
                Mới Cập Nhật
              </h2>
            </div>
            {this.props.mangalist.map(mangalist => (
              <div className="update_item">
                <div className="update_image">
                  <Link
                    className="tooltip"
                    data-tooltip="sticky_5970"
                    to={'/truyen/'+mangalist.idtruyen+'/page/1'}
                  >
                    <img
                      src={mangalist.cover}
                      alt={mangalist.tentruyen}
                    />
                  </Link>
                </div>
                <h3 className="nowrap">
                  <Link
                    className="tooltip"
                    data-tooltip="sticky_5970"
                    to={'/truyen/'+mangalist.idtruyen+'/page/1'}
                    title= {mangalist.tentruyen}
                  >
                    {mangalist.tentruyen}
                  </Link>
                  <em>{mangalist.timeupdate}</em>
                </h3>
                <Link
                  to={'#'}
                  title={mangalist.chuongmoi}
                  className="chapter"
                >
                  {mangalist.chuongmoi}
                </Link>
                <br />
              </div>
            ))}
            <Link to={'/update/page/1'} title="More" className="xemthem" rel="nofollow">More</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    mangalist: state.Home.mangalist,
    hotnovel: state.Home.hotnovel
  }),
  { fetchHome,fetchHotnovel  }
)(Home);
