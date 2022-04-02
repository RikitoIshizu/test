import React from "react"
import Head from 'next/head'
import type { NextPage } from 'next'

interface MetaProps {
	title: string
	description: string
}

const Meta :NextPage<{metaPropData: MetaProps}> = ({metaPropData}) => {
	return (
		<Head>
			<title>{metaPropData.title}</title>
			<meta name="description" content={metaPropData.description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)
}

export default Meta