/**
 * Created by PC on 2017/6/14.
 */

import React, {Component} from 'react';
export default class API extends React.Component {
    static APIList = {
        register: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/register.json',
        send_register_code: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/sms/send_register_code.json',
        authenticate: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/authenticate.json',
        send_change_password_code: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/sms/send_change_password_code.json',
        change_password: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/change_password.json',
        all_hospital: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/hospital/all.json',
        hospital_show: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/hospital/show.json',
        speciality_of_hospital: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/speciality_of_hospital.json',
        recommend_doctor: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/recommend.json',
        doctor_show: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/show.json',
        normal_user_confirmed: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/service/normal_user_confirmed.json',
        normal_user_unconfirmed: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/appointment_service/normal_user_unconfirmed.json',
        normal_user_unpaid: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/appointment_order/normal_user_unpaid.json',
        normal_user_paid: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/appointment_order/normal_user_paid',
        normal_user_info: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/show.json',
        update_user_info: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/normal_user/update.json',
        user_patient_list: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/patient/normal_user.json',
        user_patient_add: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/patient/add.json',
        user_patient_update: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/patient/update.json',
        user_patient_remove: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/patient/remove.json',
        available_appointment: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/doctor/available_appointment.json',
        appointment_order_create: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/appointment_order/create.json',
        appointment_order_pay: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/appointment_order/pay.json',
        charge_appointment_pay: 'http://www.bigbug.tech:8080/hospital-appointment-api/api/pingpp/charge_appointment.json'
    }
}