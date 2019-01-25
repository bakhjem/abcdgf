import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGenres } from "../Action/NovelActions";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Chapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prechap: undefined,
      nextchap: undefined
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.novelchapter !== prevProps.novelchapter) {
      if (this.state.prechap === undefined) {
        if (this.props.novelchapter.danhsachchuong.length === 1) {
          return this.setState({ prechap: "", nextchap: "" });
        }
        for (let i = 0; i < this.props.novelchapter.danhsachchuong.length; i++) {
          if (
            this.props.novelchapter.idchuong ===
            this.props.novelchapter.danhsachchuong[i].idchuong
          ) {
            if (i === 0) {
              this.setState({
                prechap: "",
                nextchap: this.props.novelchapter.danhsachchuong[i + 1].idchuong
              });
            }
            if (i > 0 && i < this.props.novelchapter.danhsachchuong.length - 1) {
              this.setState({
                prechap: this.props.novelchapter.danhsachchuong[i - 1].idchuong,
                nextchap: this.props.novelchapter.danhsachchuong[i + 1].idchuong
              });
            }
            if (i === this.props.novelchapter.danhsachchuong.length - 1) {
              this.setState({
                prechap: this.props.novelchapter.danhsachchuong[i - 1].idchuong,
                nextchap: ""
              });
            }
          }
        }
      }
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="breadcrumb breadcrumbs breadcrumbs_doc">
          <div className="rdfa-breadcrumb">
            <div>
              <p>
                <span className="breadcrumbs-title" />
                <span>
                  <Link to="/" title="Đọc truyện online" className="home">
                    Đọc truyện online
                  </Link>
                </span>
                <span className="separator">»</span>
                <span>
                  <Link
                    to={"/truyen/" + this.props.novelchapter.idtruyen+'/page/1'}
                    className="home"
                  >
                    {this.props.novelchapter.tentruyen}
                  </Link>
                </span>
                <span className="separator">»</span>{" "}
                {this.props.novelchapter.tenchuong}
              </p>
            </div>
          </div>
        </div>
        <div className="menu_doc">
          <span
            id="show_menu_chap"
            className="show_menu_chap btn_theodoi btn_doc"
            style={{ width: 200 }}
          >
            <Link to={'/truyen/'+this.props.novelchapter.idtruyen+'/page/1'}>Danh Sách Chương</Link>
          </span>
          <div>
            {this.state.prechap !== "" && (
              <a
                rel="nofollow"
                className="btn_theodoi btn_doc"
                href={'/chuong/'+this.state.prechap}
              >
                Chương Trước
              </a>
            )}
            {this.state.nextchap !== "" && (
              <a
                rel="nofollow"
                className="btn_theodoi btn_doc"
                href={'/chuong/'+this.state.nextchap}
              >
                Chương Sau
              </a>
            )}
          </div>
          </div>
          <div className="hentry">
          <h1 className="name_chapter entry-title">{this.props.novelchapter.tenchuong}</h1>
          <div className="entry-content">
          <div id="vung_doc" className="vung_doc">
          {ReactHtmlParser(this.props.novelchapter.noidungchuong)}
          </div>
          </div>
          <div className="menu_doc" id="load">
          <span
            id="show_menu_chap"
            className="show_menu_chap btn_theodoi btn_doc"
            style={{ width: 200 }}
          >
            <Link to={'/truyen/'+this.props.novelchapter.idtruyen+'/page/1'}>Danh Sách Chương</Link>
          </span>
          <div>
            {this.state.prechap !== "" && (
              <a
                rel="nofollow"
                className="btn_theodoi btn_doc"
                href={'/chuong/'+this.state.prechap}
              >
                Chương Trước
              </a>
            )}
            {this.state.nextchap !== "" && (
              <a
                rel="nofollow"
                className="btn_theodoi btn_doc"
                href={'/chuong/'+this.state.nextchap}
              >
                Chương Sau
              </a>
            )}
          </div>
          </div>
          </div>
        </div>
    );
  }
}

export default connect(
  state => ({
    novelchapter: state.Home.novelchapter,
    noveldetail: state.Home.noveldetail
  }),
  { fetchGenres }
)(Chapter);
