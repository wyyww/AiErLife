/**
 * Created by PC on 2017/6/14.
 */

import React,{Conponent} from 'react';

import {
    Text,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

export default class NetUitl extends React.Component{
        // get请求
        // url请求地址
        // params请求参数
        // callback回掉函数
        static get(url,params,callback){
            if(params){
                let paramsArray=[];
                //拼接参数
                Object.keys(params).forEach(key=>paramsArray.push(key+'='+params[key]));
                if(url.search(/\?/)===-1){
                    url+='?'+paramsArray.join('&');
                 }
                 else{
                    url+='&'+paramsArray.join('&');
                }
            }
            console.log(url);
            fetch(url, {
                method:'Get'
            }).then((response)=>{
                console.log(response);
                return response.json();
            }).then((responseData)=>{
                console.log(responseData);
                callback(responseData);
            }).catch((error)=>{
                console.log(error)
            })
        }

        // post请求
        // params请求参数
        // url请求地址
        // callback回掉函数

        static post(url,params,callback){
            let res='';
            for(var key in params){
                res+='&'+key+'='+params[key];
            }
            let paramsString=res.substring(1);
            fetch(url,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: paramsString
            }).then((response)=>{
                console.log(response);
                return response.json();
            }).then((responseData)=>{
                callback(responseData);
            }).catch((error)=>{
                console.log(error);
            })
        }

}