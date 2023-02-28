import React, { Component } from 'react';

class MetabaseDashboardTemplate extends Component {

    
    render() {

            var jwt = require("jsonwebtoken");

            var METABASE_SITE_URL = 'https://metabase-demo.chi-sa.org';
            var METABASE_SECRET_KEY = 'cf12873cf6c4875e011ac9b621fb1e5252a62b962ce3576b4bd41d80b7364feb';

            var filters = {
                //"province": ["ec Eastern Cape Province"],
                //"district": ["ec Alfred Nzo District Municipality"],
                //"sub-district": ["ec Matatiele Local Municipality"],
                //"facility": ["ec Maluti CHC"],
                //"start_date": '2021-01-01',
                //"end_date": '2021-12-31'
            };

            var payload = {
                resource: { dashboard: 10 },
                params:  filters,
                exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
            };
            //console.log(payload);
            var token = jwt.sign(payload, METABASE_SECRET_KEY);

            var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#bordered=true&titled=true";

            return (
                    <div style={{ height: "100vh" }}>
                        <iframe
                            src={iframeUrl}
                            width="100%"
                            height="100%"
                            title='title'
                        />
                    </div>
            )
        }
}


export default MetabaseDashboardTemplate;