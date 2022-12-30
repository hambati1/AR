import React, { useEffect, useState, useRef } from "react";


const TaxViewerResult = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div className="mb-2 row comment-margin">
                        <label for="inputcardholder name" className="col-lg-4">P-code</label>
                        <div className="col">
                            <input type="text" placeholder="" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Amount</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Lines</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Locations</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Account Type</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Incorporated</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>
                </div>

                <div class="col-sm">
                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4">Country</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4 my-2">State</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Country</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Locality</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Zip Start</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4 my-2">Zip End</label>
                        <div className="col">
                            <input type="text" className="col-md-2 form-control" id="inputcardholder name" />
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4">Origination NPA-NXX</label>
                        <div className="col">
                            <input type="text" className="form-control" id="inputcardholder name" />
                        </div>
                        <div className="col">
                            <input type="text" name="from date" className="form-control mx-2" id="inputfrom date" />
                        </div>
                    </div>
                    <div class="col">
                        <div className="mb-2 row comment-margin mx-3">
                            <label for="inputcardholder name" className="col-lg-4">Terminating NPA-NXX</label>
                            <div className="col">
                                <input type="text" className="form-control" id="inputcardholder name" />
                            </div>
                            <div className="col-lg-4">
                                <input type="text" className="form-control mx-2" id="inputcardholder name" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4">Transcation Type</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4">Regulated</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4">Sale Type</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="inputcardholder name" />
                        </div>
                    </div>

                    <div className="mb-2 row comment-margin mx-3">
                        <label for="inputcardholder name" className="col-lg-4">Date</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" id="inputcardholder name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default TaxViewerResult;
