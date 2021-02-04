/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'

// props needed:
// Repeats (boolean)
// Start Date/Time UTC
// End Date/Time UTC

export default function LiveTag() {
    const repeats = false //only repeats weekly on single day of week

    //today
    var now = new Date()
    var currentTimestamp = now.getTime()
    var currentUTCDay = now.getUTCDay()
    var currentUTCHours = now.getUTCHours()
    var currentUTCMinutes = now.getUTCMinutes()
    var currentTime = currentUTCHours + ":" + currentUTCMinutes


    // event start
    var eventStartDate = new Date("02/04/2021 5:40:00 PM UTC")
    var eventStartTimestamp = eventStartDate.getTime()
    var eventStartUTCDay = eventStartDate.getUTCDay()
    var eventStartUTCHours = eventStartDate.getUTCHours()
    var eventStartUTCMinutes = eventStartDate.getUTCMinutes()
    var eventStartTime = eventStartUTCHours + ":" + eventStartUTCMinutes

    var eventLocalStartTime = eventStartDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    })
    
    // event end
    var eventEndDate = new Date("02/04/2021 07:50:00 PM UTC")
    var eventEndTimestamp = eventEndDate.getTime()
    var eventEndUTCDay = eventEndDate.getUTCDay()
    var eventEndUTCHours = eventEndDate.getUTCHours()
    var eventEndUTCMinutes = eventEndDate.getUTCMinutes()
    var eventEndTime = eventEndUTCHours + ":" + eventEndUTCMinutes

    var eventLocalEndTime = eventEndDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    })

    if (repeats === true
        && currentUTCDay >= eventStartUTCDay
        && currentTime  >= eventStartTime
        ) {
        if (currentUTCDay >= eventEndUTCDay && currentTime >= eventEndTime) {
                return (null)
        }
        else {
            return(
                // weekly repeated event
                <div>
                    live recurring event
                </div>
            )
        }
    }
    else if (repeats === false && currentTimestamp >= eventStartTimestamp && currentTimestamp < eventEndTimestamp) {
        // static event
        return(
            <div>
                live single event
            </div>
        )
    }
    else {
        return (null)
    }
}