var eventDetails = require('./eventDetails.json')

module.exports = function createPage(user, papyrus, focus) {
    var registered_events = user.registered_events
    var event_list = registered_events.map(event => (`<li>${eventDetails[event].name}</li>`))
    if (focus) {
        event_list.push('<li>Focus</li>')
    }
    if (papyrus) {
        event_list.push('<li>Papyrus</li>')
    }
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Hackerz Confirmation Mail</title>
        <style>
            body {
                margin: 0 auto;
                padding: 0;
                width: 90%;
            }
    
            .date>p {
                margin: 4px;
                text-align: right;
            }
    
            .to>p {
                text-align: center
            }
        </style>
    </head>
    
    <body>
        <td class="m_-997339278278904083mob-pad" align="left" style="line-height:24px;padding:0;margin:0">
            <table id="m_-997339278278904083snippet"
                style="border-collapse:collapse;color:#333333;font-size:16px;font-family:Roboto;width:600px;border-width:0"
                width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                    <tr>
                        <td height="10"
                            style="line-height:20px;vertical-align:top;height:10px;padding-top:3px;padding-right:0px;padding-bottom:3px;padding-left:0px;margin:0"
                            valign="top" align="left">
                        </td>
                    </tr>
                </tbody>
            </table>
            <table id="m_-997339278278904083snippet"
                style="border-collapse:collapse;color:#333333;font-size:16px;font-family:Roboto;width:600px;border-width:0"
                width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                    <tr>
                        <td height="10"
                            style="text-align:right;line-height:20px;vertical-align:top;height:10px;padding-top:3px;padding-right:0px;padding-bottom:3px;padding-left:0px;margin:0"
                            valign="top" align="left">
                        </td>
                    </tr>
                </tbody>
            </table>
            <table id="m_-997339278278904083sub-container"
                style="border-collapse:collapse;color:#4d4d4d;font-size:16px;font-family:Roboto;width:600px;border-width:0"
                width="600" cellspacing="0" cellpadding="0" align="center">
                <tbody>
                    <tr>
                        <td width="100%" align="center" id="m_-997339278278904083green-masthead"
                            class="m_-997339278278904083fluid" style="text-align:center;background-color:#ffffff">
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td id="m_-997339278278904083body" align="left" style="line-height:24px;padding:0;margin:0">
                            <table
                                style="border-collapse:collapse;color:#4d4d4d;font-size:16px;font-family:Roboto;width:600px;border-width:1px;border-color:#dddddd;border-style:solid"
                                width="600" cellspacing="0" cellpadding="0">
                                <tbody>
                                    <tr>
                                        <td bgcolor="#ffffff" id="m_-997339278278904083content"
                                            style="line-height:24px;padding-top:0px;padding-right:0;padding-bottom:32px;padding-left:0;margin:0;background-color:#ffffff">
                                            <div style="display: flex; background: #121214">
                                                    <img style="border:none" src="https://cithackerz.pro/images/CIT%20Yellow%20White.png"
                                                    alt="Chennai Institute of Technology" height="96" tabindex="0">
                                                <div style="flex: 1;"></div>
                                                <img style="border:none" src="https://cithackerz.pro/images/NewHackerzWhite.png"
                                                    alt="Hackerz" height="96" tabindex="0">
                                            </div>
                                            <div class="a6S" dir="ltr" style="opacity: 0.01; left: 861.6px; top: 193.2px;">
                                                <div id=":1ko" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button"
                                                    tabindex="0" aria-label="Download attachment " data-tooltip-class="a1V"
                                                    data-tooltip="Download">
                                                    <div class="aSK J-J5-Ji aYr"></div>
                                                </div>
                                            </div>
                                            <table id="m_-997339278278904083sub-container"
                                                style="border-collapse:collapse;color:#4d4d4d;font-size:16px;font-family:Roboto;width:600px;border-width:0"
                                                width="600" cellspacing="0" cellpadding="0" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table
                                                                style="border-collapse:collapse;color:#4d4d4d;font-size:16px;font-family:Roboto;border-width:0"
                                                                cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="m_-997339278278904083subheader"
                                                                            style="line-height:24px;font-size:16px;padding-top:32px;padding-right:30px;padding-bottom:0;padding-left:30px;margin:0">
                                                                            <span>
    
                                                                                <p style="text-align: right">${new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
                                                                                </p>
                                                                                <p style="text-align: center; font-weight: 600;">
                                                                                    TO WHOM IT MAY CONCERN
                                                                                </p>
                                                                                <p>This is to acknowledge that <b>${user.name} of
                                                                                        ${user.year} year, ${user.department}
                                                                                        department,
                                                                                        ${user.college}</b> has shown interest
                                                                                    to
                                                                                    attend <b>Hackerz</b> - a National Level
                                                                                    Technical Symposium organized by the
                                                                                    department of
                                                                                    Computer Science
                                                                                    Engineering and
                                                                                    Information Technology
                                                                                    Chennai Institute of
                                                                                    Technology.</p>
                                                                                <p>${user.name} has registered to participate in
                                                                                    the following events:
                                                                                </p>
                                                                                <ol>
                                                                                    ${event_list.join('')}
                                                                                </ol>
                                                                                <p>The symposium will be held on
                                                                                    <b>September 6, 2019</b>, all-day, at
                                                                                    the <b>Chennai Institute of Technology
                                                                                        campus,
                                                                                        Sarathy Nagar, Kundrathur,
                                                                                        Chennai</b>.
                                                                                </p>
                                                                            </span></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
    
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </body>
    
    </html>`
}