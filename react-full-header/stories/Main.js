import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with title', () => {
        <FullHeader title="TDD" />
    })
    .add('with title and subtitle', () => {
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
        />
    })
    .add('with title, subtitle and bgColor', () => {
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299bb"
        />
    })
    .add('with title, subtitle, bgColor and textColor', () => {
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299bb"
            textColor="#ff9900"
        />
    })
    .add('with title, subtitle, bgColor, textColor and font', () => {
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299bb"
            textColor="#ff9900"
            font="cursive"
        />
    })
    .add('with title, subtitle and bgImage', () => {
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgImage="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    })
    .add('with title, subtitle and video', () => {
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    });
