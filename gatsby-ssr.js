import React from 'react';

export function withPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>
}