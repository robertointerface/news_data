import React from 'react';
import {connect} from "react-redux";
import {getNewsToDisplay} from 'functions/Display_news/displayNewsFunctions'
import NewsDisplayList from 'components/new_display/NewsDisplayList'

export const DisplayNewListContainer = connect(
    state =>
        ({
            News: getNewsToDisplay()
        }),
    dispatch =>
        ({

        })
)(NewsDisplayList)
