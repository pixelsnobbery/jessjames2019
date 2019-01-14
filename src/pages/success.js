import React from 'react'

import Layout from '../components/layouts/layout'

import Theme from '../config/theme'
import { ThemeProvider } from 'styled-components'

import Section from '../components/layouts/section'
]
import SectionTitle from '../components/layouts/section-title';


const Success = () => (
  <ThemeProvider theme={Theme}>
    <Layout>

      <Section>
        <SectionTitle text="Success!"></SectionTitle>
      </Section>




    </Layout>
  </ThemeProvider>
)

export default Success



