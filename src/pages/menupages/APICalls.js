import React, { useEffect, useState,useRef  } from "react";

import {
  CREATE_NEW_CONTACT,
  DELETE_CONTACT,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_CONTACT_FOLDER_LIST,
  GET_CONTACT_LABEL_LIST,
  GET_CONTACT_LIST,
  SHOW_MESSAGE,
  TOGGLE_CONTACT_DRAWER,
  UPDATE_CONTACT_DETAIL,
  UPDATE_CONTACT_LABEL,
  UPDATE_CONTACT_STARRED_STATUS,
} from 'shared/constants/ActionTypes';
import {appIntl} from '@crema/utility/helper/Utils';
import jwtAxios from '@crema/services/auth/jwt-auth';
import axios from 'axios';

const PATH='http://172.20.51.231:8761/cm/api/';
let result='';

function responceSuccess(response) {
  return { status: "success", data: response, error: response};
}

function responceFailure(error) {
  return { status: "error", data: error, error: error };
}


/* import */
export const getimportSearchData= (selectfileType) => {
 const b0 = {"fileTypeId": selectfileType,
             "page": 1,"size": 3,
             "sort": ["importDt,desc"]};
  let session=localStorage.getItem('token');
  fetch(PATH + 'searchimportfile', {
      method: 'POST',
      headers: { "Content-Type": 'application/json', Session: session },
      body: JSON.stringify(b0)
    }).then((response) => response.json())
    .then(function(data) {
        result = data.response;
    });
return result;
}

export const getImportFileTypeData=(functionId) => {
let session=localStorage.getItem('token');
  const response = fetch(PATH + "cn/filetype?functionId="+functionId+"&isActive=1&isImport=1", {
    method: 'GET',
    headers: { Session: session }
  }
  ).then((response) => response.json());
  console.log(response);
  return response;
};

 export   const getImportFileNames = (event) => {
      console.log(event);
      let session=localStorage.getItem('token');
      if (event != undefined) {
        const url = PATH + 'ar/import/file/list?fileTypeId=' + event + '&brandId=1';
        const response = fetch(url, {
          method: 'GET',
          headers: { Session: session }
        }
        ).then((response) => response.json());
        console.log(response);
        return response;
      }
    };

  export const onSubmitImportHandler = (payload) => {
       const url = PATH + 'ar/import/file';
       let session=localStorage.getItem('token');
       const config = {
          headers: {
            'content-type': 'application/json',
            Session: session
          },
        };
        axios.post(url, payload, config).then((response) => {
          console.log(response.data);
        });
      }

 /* END import */

/* Export */

export const getExportFileTypeData=() => {
console.log("sssssssssss");
let session=localStorage.getItem('token');
  const response = fetch(PATH + "cn/filetype?functionId=6&isActive=1&isImport=0", {
    method: 'GET',
    headers: { Session: session }
  }
  ).then((response) => response.json());
  console.log(response);
  return response;
};

export const getExportSearchData=(fileTypeId,brandId) => {
  let b0={"fileTypeId": fileTypeId, "brandId": brandId};
  let session=localStorage.getItem('token');
    const response = fetch(PATH + "ar/export/file", {
      method: 'POST',
      headers: { "Content-Type": 'application/json', Session: session },
      body: JSON.stringify(b0)
    }
    ).then((response) => response.json());
    console.log(response);
     return response;
  };

  export const getExportFileNames = (event) => {
    console.log(event);
    let session=localStorage.getItem('token');
    if (event != undefined) {
    let b0={
                 "fileTypeId": event,
                 "brandId": 1
         };
      const response = fetch(PATH + "/searchexportfile", {
           method: 'POST',
           headers: { "Content-Type": 'application/json', Session: session },
           body: JSON.stringify(b0)
         }
         ).then((response) => response.json());
         return response;
    }
  };

export const onSubmitExportHandler = (json) => {
    const url = PATH + 'ar/export/file';
    let session=localStorage.getItem('token');
    const config = {
      headers: {
        'content-type': 'application/json',
        Session: session
      },
    };
    axios.post(url, json, config).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }

/* End Export */

/*Batch payment*/

export const saveBatchName = (json) => {
    let result='';
    let session=localStorage.getItem('token');
    const url = PATH + 'ar/batch/save';
    if (json != undefined) {
    const config = {headers: {'content-type': 'application/json', Session: session}};
    let success=false;
    return axios.post(url, json, config).then(async (response) =>  response)
        .then(function(response) {
            console.log(response.data.response);
            result = response.data.response;
            success=true;
            return  responceSuccess(result);
        }).catch((error) => error).then(function(response) {
            if (success ===false)
            {
                console.log('aaaaaaa');
                let errorMessage=response.response.data.errorMessage;
                result =errorMessage.split(":");
                 console.log(result);
               return  responceFailure(result);
            }
            else
            {
               let data=response.data
                return  responceSuccess(data);
            }
        });
    }
  };

export const getBatchDetailsByBatchIdService= (batchId) => {
    let session=localStorage.getItem('token');
    if (batchId != undefined) {
    let json={"batchId": "%"+batchId+"%"};
    const config = {headers: {'content-type': 'application/json', Session: session}};
    axios.post(PATH + "/ar/searchpayments", json, config).then((response) =>  response)
    .then(function(response) {
        console.log(response.data.response);
       result = response.data.response;
    });
    }
     return  result;
  };

export const getSearchData= (active) => {
let session=localStorage.getItem('token');
  fetch(PATH + 'ar/batch?isPayment='+active+'&isClosed=0', {
      method: 'GET',
      headers: { "Content-Type": 'application/json', Session: session }
    }
    ).then((response) => response.json())
    .then(function(data) {
        result = data.response;
    });
return result;
}
/*End Batch payment*/
