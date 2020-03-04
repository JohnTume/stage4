'use strict';
import ParagraphOne from './paragraph1';
import ParagraphTwo from './paragraph2';
import ParagraphThree from './paragraph3';
import ParagraphFour from './paragraph4';
import './style.css';
import React, {Component, useState} from 'react'; //import R
import Chart from './ChartsPage';

export class InspireContainer extends React.Component {
    render() {
        return (
            <div>
                <ParagraphOne/>
                <ParagraphTwo/>
                <ParagraphThree/>
                <ParagraphFour/>
            </div>
        )
    }
}