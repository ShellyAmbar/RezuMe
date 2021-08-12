import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./EditShowList.css";
import { Modal } from "react-bootstrap";

class EditShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      list: props.list,
      object: props.object,
      formType: props.formType,

      showPopup: false,
      showExpandItem: false,
      selectedItem: {},
    };
  }

  remove = (i) => {
    const temp_list = this.state.list;
    temp_list.splice(i, 1);
    this.setState({
      list: temp_list,
    });
  };

  add = (item) => {
    console.log(item);
    const temp_list = this.state.list;
    temp_list.push(item);

    this.setState({
      list: temp_list,
    });

    this.handleClosePopup();
  };

  expandItem = (item) => {
    this.setState({
      showExpandItem: true,
      selectedItem: item,
    });
  };

  handleCloseExpandItem = () => {
    this.setState({
      showExpandItem: false,
    });
  };

  handleClosePopup = () => {
    this.setState({
      showPopup: false,
    });
  };
  handlOpenPopup = () => {
    this.setState({
      showPopup: true,
    });
  };

  createItemList = () => {
    var rows = {};
    let counter = 1;
    this.state.list.forEach((item, idx) => {
      rows[counter] = rows[counter] ? [...rows[counter]] : [];
      if (idx % 5 === 0 && idx !== 0) {
        counter++;
        rows[counter] = rows[counter] ? [...rows[counter]] : [];
        rows[counter].push(item);
      } else {
        rows[counter].push(item);
      }
    });
    return rows;
  };

  render() {
    let rows = this.createItemList();
    return (
      <div className="page">
        <h1
          style={{
            color: "blueviolet",
            fontSize: "50px",
          }}
        >
          {this.state.title}
        </h1>
        <Button
          style={{ width: "100px", marginBottom: "50px", marginTop: "20px" }}
          variant="outlined"
          color="primary"
          onClick={this.handlOpenPopup}
        >
          ADD
        </Button>
        <div className="edit_show_container">
          {Object.keys(rows).map((row) => {
            return (
              <div class="row" key={row}>
                {rows[row].map((item, index) => {
                  return (
                    <div class="col-sm">
                      <button
                        className="button"
                        onClick={() => this.remove(index)}
                      >
                        +
                      </button>
                      <this.state.object
                        item={item}
                        onClickExpand={() => this.expandItem(item)}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <Modal show={this.state.showPopup} onHide={this.handleClosePopup}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body style={{ height: "600px" }}>
            <this.state.formType add={this.add} />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.state.showExpandItem}
          onHide={this.handleCloseExpandItem}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body style={{ height: "600px" }}>
            {this.state.selectedItem.name}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditShowList;
