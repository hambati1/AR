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
let session='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW1iYXRpIiwic2NvcGVzIjpbIlJFRlJFU0hfVE9LRU4iXSwiaXNzIjoiUE5HIiwiaWF0IjoxNjcwNjg3NTA0LCJleHAiOjE2NzEyODc1MDR9.XFUTx0JrRr7PZRzpsco2hXHu5fGYyc6RIg58jO87plnDbpGJgCRcy2f29eAve0u0BPy5gMn2fudIcOukVJLfGQ';

export const getSearchData= (active) => {
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

/* import */
 export const getimportSearchData=(selectfileType) => {
  const b0 = {
                    "fileTypeId": selectfileType,
                       "page": 1,
                       "size": 3,
                       "sort": [
                               "importDt,desc"
                       ]
               };
    const response = fetch(PATH + "/searchimportfile", {
      method: 'POST',
      headers: { "Content-Type": 'application/json', Session: session },
      body: JSON.stringify(b0)
    }
    ).then((response) => response.json());
    console.log(response.response);
    setSearchTypes(response.response);
     NonCitizenDetails=response.response;
          console.log(NonCitizenDetails);
  };


export const getImportFileTypeData=(functionId) => {
console.log("sssssssssss");
  const response = fetch(PATH + "/cn/filetype?functionId="+functionId+"&isActive=1&isImport=0", {
    method: 'GET',
    headers: { Session: session }
  }
  ).then((response) => response.json());
  console.log(response);
  return response;
};


 export   const getImportFileNames = (event) => {
      console.log(event);
      if (event != undefined) {
        const url = PATH + '/ar/import/file/list?fileTypeId=' + event + '&brandId=1';
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
       const url = PATH + '/ar/import/file';
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
  const response = fetch(PATH + "/cn/filetype?functionId=6&isActive=1&isImport=0", {
    method: 'GET',
    headers: { Session: session }
  }
  ).then((response) => response.json());
  console.log(response);
  return response;
};

export const getExportSearchData=(fileTypeId,brandId) => {
  let b0={"fileTypeId": fileTypeId, "brandId": brandId};
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
    const url = PATH + '/ar/export/file';
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
export const saveBatchName = (json,batchId) => {
    const url = PATH + '/ar/batch/save/'+batchId;
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
/*End Batch payment*/
