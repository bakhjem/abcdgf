import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../Action/NovelActions";
import { Redirect } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      a: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({q: (event.target.value).replace(" ","+")});
  }
  handleSubmit(){
    // console.log(112);
    this.setState({a:'1'})
  }

  
  render() {
    console.log(this.state)
    return (

      <div>
        {this.state.a === '1' && <Redirect to={'/search/'+this.state.q+'/page/1'} />}
        <div id="header">
          <div className="top_header">
            <Link
              id="logo"
              className="logo"
              to="/"
              title="Đọc truyện online"
            >
              Đọc truyện online
            </Link>
          </div>
          <div className="wrap-menu">
            <form onSubmit={this.handleSubmit}>
              <input
                id="search_story"
                type='text'
                placeholder="nhập tên truyện không dấu ..."
                value={this.state.q}
                onChange={this.handleChange}
              />
              {/* <div style={{ display: "none" }}>
                <input />
              </div> */}
            </form>
            <ul id="menu" className="menu">
              <li>
                <Link title="Novel online" to="/">
                  Đọc Truyện Online
                </Link>
              </li>
              <li>
                <Link
                  title="Truyện Hot"
                  to={'/truyenhot/page/1'}
                >
                  Truyện Hay
                </Link>
              </li>
              <li>
                <Link
                  title="Truyện hoàn thành"
                  to={'/truyenhoanthanh/page/1'}
                >
                 Truyện hoàn thành
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    genresdetail: state.Home.genresdetail,
  }),
  { fetchSearch }
)(Header);
