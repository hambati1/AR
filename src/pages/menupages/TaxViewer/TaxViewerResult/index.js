import React, { useEffect, useState, useRef } from "react";


const TaxViewerResult = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div className="mb-2 row comment-margin">
                        <label for="inputp-code" className="col-lg-4">P-code</label>
                        <div className="col">
                            <input type="text" placeholder="" className="col-md-2 form-control" id="inputp-code" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputamount" className="col-lg-4 my-2">Amount</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputamount" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputlines" className="col-lg-4 my-2">Lines</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputlines" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputlocations" className="col-lg-4 my-2">Locations</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputlocations" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputaccount type" className="col-lg-4 my-2">Account Type</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputaccount type" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputincorporated" className="col-lg-4 my-2">Incorporated</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputincorporated" />
                        </div>
                    </div>
                </div>

                <div class="col-sm">
                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcountry" className="col-lg-4">Country</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcountry" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputstate" className="col-lg-4 my-2">State</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputstate" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcountry" className="col-lg-4 my-2">Country</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcountry" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputlocality" className="col-lg-4 my-2">Locality</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputlocality" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputzip start" className="col-lg-4 my-2">Zip Start</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputzip start" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputzip end" className="col-lg-4 my-2">Zip End</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputzip end" />
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputorigination npa-nxx" className="col-lg-4">Origination NPA-NXX</label>
                        <div className="col">
                            <input type="text" className="form-control" id="inputcardholder name" />
                        </div>
                        <div className="col">
                            <input type="text"  className="form-control mx-2" id="origination nap-nxx" />
                        </div>
                    </div>
                    <div class="col">
                        <div className="mb-2 row comment-margin mx-3">
                            <label for="inputterminating npa-nxx" className="col-lg-4">Terminating NPA-NXX</label>
                            <div className="col">
                                <input type="text" className="form-control" id="inputterminating nap-nxx" />
                            </div>
                            <div className="col-lg-4">
                                <input type="text" className="form-control mx-2" id="inputterminating npa-nxx" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputtranscation type" className="col-lg-4">Transcation Type</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="inputtranscation type" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputregulated" className="col-lg-4">Regulated</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="inputregulated" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputsale type" className="col-lg-4">Sale Type</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="inputsaletype" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputdate" className="col-lg-4">Date</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="inputdate" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default TaxViewerResult;
