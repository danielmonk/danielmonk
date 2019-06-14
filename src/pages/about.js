import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typing from 'react-typing-animation';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div class="page page--about">
      <section id="about" class="about">
          <div class="content--wrapper">
            <h3>About</h3>
            <div id="terminal" class="terminal">
              <div class="terminal-typing">
              <Typing speed={0.25}>
                <div class='line line-1' data-line-nr='1'>
                  <div class="purple">class</div> <div class='yellow'>daniel</div> &#123;
                </div>
                <div class='line line-2' data-line-nr='2'>
                  <div class='dot'>..</div><div class='comment'>here's a brief list of my skills, experience & interests</div>
                </div>
                <div class='line line-3' data-line-nr='3'>
                  <div class='dot'>..</div><em class='purple'>constructor</em>() &#123;
                </div>
                <div class='line line-4' data-line-nr='4'>
                  <div class='dot'>..</div><div class='dot'>..</div><div class='red'>this</div>.name <div class='red'>=</div> <div class='green'>Daniel Monk</div>
                </div>
                <div class='line line-5' data-line-nr='5'>
                  <div class='dot'>..</div><div class='dot'>..</div><div class='red'>this</div>.dateOfBirth <div class='red'>=</div> <div class='green'>30/10/1993</div>
                </div>
                <div class='line line-6' data-line-nr='6'>
                  <div class='dot'>..</div><div class='dot'>..</div><div class='red'>this</div>.email <div class='red'>=</div> <div class='green'>daniel@danielmonk.co.uk</div>
                </div>
                <div class='line line-7' data-line-nr='7'>
                  <div class='dot'>..</div>
                </div>
                <div class='line line-8' data-line-nr='8'>
                  <div class='dot'>..</div><div class='yellow'>experience</div>() &#123;
                </div>
                <div class='line line-9' data-line-nr='9'>
                  <div class='dot'>..</div><div class='dot'>..</div><div class='blue'>return</div> [
                </div>
                <div class='line line-10' data-line-nr='10'>
                  <div class='dot'>..</div><div class='dot'>..</div><div class='dot'>..</div> &#123; <div class='green'>'2017-current'</div> 	&#58; <div class='green'>'Front-end developer at <a target='_blank' href='https://www.zazzlemedia.co.uk'>Zazzle Media</a>.'</div> 	&#125;
                </div>
                <div class='line line-11' data-line-nr='11'>
                  <div class='dot'>..</div><div class='dot'>..</div><div class='dot'>..</div>&#123; <div class='green'>'2016-2017'</div> : <div class='green'>'Front-end developer at <a target='_blank' href='https://www.mold.agency'>Mold Agency</a>.'</div> &#125;
                </div>
                <div class='line line-12' data-line-nr='12'>
                  <div class='dot'>..</div><div class='dot'>..</div><div class='dot'>..</div>&#123; <div class='green'>'2013-2016'</div> : <div class='green'>'Junior developer at <a target='_blank' href='https://www.brave.agency'>Brave Agency</a>.'</div> &#125;
                </div>
                <div class='line line-13' data-line-nr='13'>
                  <div class='dot'>..</div><div class='dot'>..</div>]
                </div>
                <div class='line line-14' data-line-nr='14'>
                  <div class='dot'>..</div>&#125;
                </div>
                <div class='line line-15' data-line-nr='15'>
                  <div class='dot'>..</div><span class='yellow'>interests</span>() &#123;	
                </div>
                <div class='line line-16' data-line-nr='16'>
                  <div class='dot'>..</div><div class='dot'>..</div><div class='blue'>return</div> [ <div class='green'>'HTML5', 'CSS3', 'JS', jQuery', 'Node.js', 'React', 'Gatsby', 'graphQL', 'npm/bower',</div>
                </div> 
                <div class='line line-17' data-line-nr='17'>
                  <div class='green'>'gulp/grunt', 'SASS/Less', 'git', 'PHP', 'WordPress', 'MySQL', 'Photoshop', 'Adobe CC', 'Sketch'</div> ]
                </div>
                <div class='line line-18' data-line-nr='18'>
                  <div class='dot'>..</div>&#125;
                </div>
                <div class='line line-19' data-line-nr='19'>
                }
                </div>
              </Typing>
              </div>
            </div>
          </div>
        </section>
      </div>

  </Layout>
)

export default SecondPage
