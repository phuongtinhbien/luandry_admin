import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertModalFooter,DeleteButton} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import generateData from '../generateData';

const data = generateData(1000);

class ReactBootstrapTable extends Component {

  state = {
    column: [],
    tableName: "Cloth Categories",
    tableDesc: "The type of clothes. Using for sort cloths",
    data: generateData(20, false)
  };

    removeItem = itemId => {
      this.setState({
        data: data.filter(item => item.id !== itemId)

      });
    }

    beforeSave(e) {
      
    }
    handleSave(save) {
      // Custom your onSave event here,
      // it's not necessary to implement this function if you have no any process before save
      console.log('This is my custom function for save event');
      save();
    }
    handleDeleteButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      console.log('This is my custom function for DeleteButton click event');
      onClick();
    }

    createCustomModalHeader(onClose, onSave) {
      return (
          <h4 className="title">Add new value</h4>
      );
    }
    createCustomModalFooter = (closeModal, save)=>{
      return (
        <InsertModalFooter
          className='my-custom-class'
          saveBtnText='Save'
          closeBtnText='Cancel'
          closeBtnContextual='btn btn-warning btn-fill btn-wd'
          saveBtnContextual='btn btn-primary btn-fill btn-wd'
          beforeClose={ this.beforeClose }
          beforeSave={ this.beforeSave }
          onSave={ () => this.handleSave(save) }
          />
      );
    }

    createCustomDeleteButton = (onClick) => {
      return (
        <DeleteButton
          btnText='Remove'
          btnContextual='btn btn-danger btn-fill btn-wd'
          // className='my-custom-class'
          btnGlyphicon='glyphicon-remove'
          onClick={ e => this.handleDeleteButtonClick(onClick) }/>
      );
    }

    createCustomInsertButton = (openModal) => {
      return (
        <button className="btn btn-primary btn-fill btn-wd" onClick={ openModal }>Create New</button>
        
      );
    }
  

  

  

  render() {
    const { data } = this.state;
    const tableName = this.state.tableName;
    const tableDesc = this.state.tableDesc;
    function onAfterDeleteRow(rowKeys) {
      alert('The rowkey you drop: ' + rowKeys);
    }
    const selectRowProp = {
      mode: 'checkbox',
    };
    const options = {
      sizePerPage: 10,
      prePage: 'Previous',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      hideSizePerPage: true,
      afterDeleteRow: onAfterDeleteRow,
      insertModalHeader: this.createCustomModalHeader,
      insertModalFooter: this.createCustomModalFooter,
      deleteBtn: this.createCustomDeleteButton,
      insertBtn: this.createCustomInsertButton
    };

    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4>{tableName}</h4>
                <p>{tableDesc}</p>
              </div>
              <div className="content">
                <BootstrapTable
                  data={data}
                  bordered={false}
                  striped
                  insertRow={ true }
                  search={ true } multiColumnSearch={ true }
                  deleteRow={ true } selectRow={ selectRowProp }
                  pagination={true}
                  options={options}>
                  <TableHeaderColumn
                    dataField='id'
                    width="100px"
                    hiddenOnInsert="true"
                    dataSort>
                    STT
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='name'
                    width="100%"
                    isKey
                    dataSort>
                    Cloth Category Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='status'
                    editable={ { type: 'checkbox', options: { className:"custom-control-input", values: 'active:inactive' } }}
                    width="10%"
                    dataSort>
                    Status
                  </TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ReactBootstrapTable