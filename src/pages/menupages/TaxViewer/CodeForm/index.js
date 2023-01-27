import React, { useEffect, useState, useRef } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import { ModalHeader } from "reactstrap";

import { onSubmitPcodeHandler,getStateTypeData,getCountryTypeData} from '../../APICalls';
const CodeForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [pcode, setPcode] = useState([]);
    const [StateType, setStateTypes] = useState();
    const [selectStateType, setselectStateType] = useState('');

    const [CountryType, setCountryTypes] = useState();
    const [selectCountryType, setselectCountryType] = useState('');


    
    const onSubmitHandlerPcodes = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log("ss")
        const form = event.target;
        event.preventDefault();
        let json = {
            country: 'USA',
            state: 'OH',
            county: 'Hamilton',
        };
        console.log(json);
        let aaa = JSON.stringify(json);

        onSubmitPcodeHandler(aaa).then((data) => { setPcode(data.data.response) })
    };

    const selectChangeHandler = (
        setFunction: React.Dispatch<React.SetStateAction<string>>,
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        // console.log(event);
        setselectStateType(event.target);
      };

    useEffect(() => {
         getStateDataVal();
         getCountryDataVal();
      }, []);
    


    async function getStateDataVal() {
        let data = await getStateTypeData();
        setStateTypes(data);
      }
      async function getCountryDataVal() {
        let data = await getCountryTypeData();
        setCountryTypes(data);
      }
      return (
        <div>
            <Button className="btn-color" onClick={handleShow}> <img src="/assets/images/notepad.png" /> </Button>
            <Modal
                className="pop-up"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <ModalTitle>Choose P-Code</ModalTitle>
                </Modal.Header>
                <Modal.Body className="">

                    <div class="container borderbottom">
                        <form >
                            <div class="row">
                                <div class="col-sm col-5">
                                    <div className="mb-2 row">
                                        <label for="inputcountry" className="font col-form-label">Country</label>
                                        <div className="col">
                                        <select className='form-select' Name='selectCountryType'aria-label='Default select example'onChange={(e) =>
                            selectChangeHandler(selectCountryType, e.target.value)}>
                            <option value=''></option>
                            {CountryType &&
                           CountryType.map((user) => (
                          <option value={user.countryCd}>{user.countryName}
                           </option>
                           ))}
                          </select>
                                        </div>
                                    </div>

                                    <div className="mb-2 row">
                                        <label for="inputstate" className="col-lg-2 font col-form-label">State</label>
                                        <div className="col">
                                        <select className='form-select' Name='selectStateType'aria-label='Default select example'onChange={(e) =>
                            selectChangeHandler(selectStateType, e.target.value)}>
                            <option value=''></option>
                            {StateType &&
                           StateType.map((user) => (
                          <option value={user.stateName}>{user.stateCd}
                           </option>
                           ))}
                          </select>
                            </div>
                            </div>
                            <div className="mb-2 row">
                                        <label for="inputcounty" className="col-lg-2 font  col-form-label">County</label>
                                        <div className="col">
                                            <select className="form-select" readOnly name="county" aria-label="Default select example" >
                                                <option value=""> </option>
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-2 row">
                                        <label for="inputlocality" className="col-lg-2 font col-form-label">Locality</label>
                                        <div className="col">
                                            <select className="form-select" name="locality" aria-label="Default select example" >
                                                <option value=""> </option>
                                                <option value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-2 row">
                                        <label for="inputzip start" className="col-lg-2 font col-form-label">Zip Start</label>
                                        <div className="col">                                        
                                            <input type="text" className="col-md-2 form-control"/>
                                        </div>
                                    </div>

                                    <div className="mb-2 row">
                                        <label for="inputzip end" className="col-lg-2 font col-form-label">Zip End</label>
                                        <div className="col">                                           
                                            <input type="text" className="col-md-2 form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="vr mx-3 row"></div>
                                {/* <div class="col-5" style={{marginTop: "-163px"}} >
                            <h4>p-code</h4> */}
                                <div className="scroll col-6 col-label">P-Code
                                    {pcode.map((data, idx) => <div>{data}
                                    </div>)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm col-5">
                                    <button onClick={onSubmitHandlerPcodes} className="btn code">Find P-Codes</button>
                                    <button type='button' className="btn mx-3 my-2 btn-save">Clear</button>
                                </div>
                                <div className="vr mx-3 row "></div>
                                <div className="col-6"> &#160;</div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer className="bordertopremove">
                    <div>
                        <button className="btn btn-save mx-3" >Save</button>
                        <button className="btn btn-save">Cancel</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default CodeForm;
