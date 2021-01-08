import styles from "./CodeResume.module.css"
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeResume({props}) {
    return <div className={styles["code-resume"]}>
        <SyntaxHighlighter customStyle={{backgroundColor: "inherit"}} language="elixir" style={a11yLight}>
            {getCodeResume().join('\n')}
        </SyntaxHighlighter>
        {false && <MODULE name="Portfolio">
            <PROTO name="handle_call">
                <ATOM tx=":welcome"/>
                <W tx="_from" op={0.5}/>
                <W tx="_state" op={0.5}/>
            </PROTO>
            <BODY depth={2}>
                <ACC>
                    <ATOM tx=":reply"/><VIR/><SP/><STR tx="Welcome to my website!"/>
                </ACC>
            </BODY>
            <L/>
            <PROTO name="whats_up">
            </PROTO>
            <BODY depth={2}>
                <ACC>
                    <ATOM tx=":reply"/><VIR/><SP/><STR tx="Looking for an internship :O"/>
                </ACC>
            </BODY>
            <L/>
            <PROTO name="about">
                <ATOM tx=":me"/>
                <STR tx="experience"/>
            </PROTO>
            <BODY depth={2}>
                <ACC>
                    <ATOM tx=":reply"/><VIR/><SP/><STR tx="Does making this count?"/>
                </ACC>
            </BODY>
            <L/>
            <PROTO name="about">
                <ATOM tx=":me"/>
                <STR tx="education"/>
            </PROTO>
            <BODY depth={2}>
                <OKLIST start="%{" finish="}">
                    <span><ATOM tx=":school"/><SP/><DARR/><SP/><CLICKSTR tx="IUT de Paris" link="https://www.iut.parisdescartes.fr/"/></span>
                    <span><ATOM tx=":field"/><SP/><DARR/><SP/><STR tx="Computer Science"/></span>
                    <span><ATOM tx=":length"/><SP/><DARR/><SP/><STR tx="2 years"/></span>
                    <span><ATOM tx=":expectedGraduation"/><SP/><DARR/><SP/><W tx="2021"/></span>
                </OKLIST>
            </BODY>
            <L/>
            <PROTO name="about">
                <ATOM tx=":me"/>
                <STR tx="hobbies"/>
            </PROTO>
            <BODY depth={2}>
                <OKLIST>
                    <STR tx="Art"/>
                    <STR tx="Reading"/>
                    <STR tx="Hiking"/>
                    <STR tx="Making video games"/>
                </OKLIST>
            </BODY>
        </MODULE>
    }
    </div>
}

function OKLIST({children, start='[', finish=']'}) {
    return <>
        <L>
            <TAB/><TAB/>
            <Punctuation tx="{"/>
            <ATOM tx=":ok"/>
            <VIR/>
            <SP/>
            <Punctuation tx={start}/>
        </L>
        {children && (
            <>
            {
                React.Children.map(children, (child, i) => (
                    <L>
                        <TAB/><TAB/><TAB/>
                        {child}
                        {i != children.length - 1&&
                            <VIR/>
                        }
                        {i == children.length -1 &&
                            <>
                                <SP/>
                                <Punctuation tx={finish}/>
                                <Punctuation tx="}"/>
                            </>
                        } 
                    </L>
                ))
            }
            </>
        )}
    </>
}

function PROTO({name, children}) {
    return <>
        <DEF/><SP/><ATOM tx={name}/><PARENTH>
        {
            children && (
                <>
                {React.Children.map(children, (child, i) => (
                    <>
                    {i != 0 && (
                        <>
                        <VIR/>
                        <SP/>
                        </>
                    )}
                    {child}
                    </>
                ))}
                </>
            )
        }
        </PARENTH><SP/><DO/><DDOT/>
    </>
}

function MODULE({name, children}) {
    return <>
        <DEFMOD/><SP/><ATOM tx={name}/><SP/><DO/><DDOT/>
        <BODY>
            {children}
        </BODY>
    </>
}

function BODY({children, depth=1}) {
    return <>
        {
            children && (
                <>
                {React.Children.map(children, (child, i) => {
                    if(['BODY','OKLIST'].indexOf(child.type.name) == -1) return <>
                        <L>
                        <NTAB n={depth}/>
                        {child}
                        </L>
                    </>
                    return <>{child}</>
                    
                })}
                </>
            )
        }
        <L>
            <NTAB n={depth-1}/>
            <END/>
        </L>
    </>
}

function L({children}) {
    return <p>
        {children}
    </p>
}

function NTAB({n}) {
    return <>
        {[...Array(n)].map((v, i) => (
            <TAB key={i}/>
        ))}
    </>
}

function TAB({props}) {
    return <W tx="  " op={0.3}/>
}

function SP({props}) {
    return <W tx="_" op={0}/>
}

function DO({props}) {
    return <>
        <Keyword tx="do"/>
    </>
}

function ATOM({tx}) {
    return <W tx={tx} bold={true}/> 
}

function BRACK({children}) {
    return <>
        <Punctuation tx="["/>
        {children}
        <Punctuation tx="]"/>
    </>
}

function ACC({children}) {
    return <>
        <Punctuation tx="{"/>
        {children}
        <Punctuation tx="}"/>
    </>
}

function PARENTH({children}) {
    return <>
        <Punctuation tx="("/>
        {children}
        <Punctuation tx=")"/>
    </>
}

function ARR({props}) {
    return <Punctuation tx="->"/>
}

function DARR({props}) {
    return <Punctuation tx="=>"/>
}

function VIR({props}) {
    return <Punctuation tx=","/>
}

function DOT({props}) {
    return <Punctuation tx="."/>
}

function DDOT({props}) {
    return <Punctuation tx=":"/>
}

function DEF({props}) {
    return <Keyword tx="def"/>
}

function END({props}) {
    return <Keyword tx="end"/>
}

function DEFMOD({props}) {
    return <Keyword tx="defmod"/>
}

function CLICKSTR({tx, link}) {
    return <W tx={`"${tx}"`} bo={true} link={link} />
}

function STR({tx}) {
    return <W tx={`"${tx}"`} bo={true}/>
}

function Keyword({tx}) {
    return <W tx={tx} it={true} op={0.5}/>
}

function Punctuation({tx}) {
    return <W tx={tx} op={0.75}/>
}

function W({tx, it = false, bo = false, link = false, op = 1}) {
    if(link) return <a href={link}>
        <W tx={tx} it={it} bo={bo} link={false} op={op}></W>
    </a>
    if(bo) return <b>
        <W tx={tx} it={it} bo={false} link={false} op={op}></W>
    </b>
    if(it) return <i>
        <W tx={tx} it={false} bo={false} link={false} op={op}></W>
    </i>
    
    return <span className="code-font" style={{opacity:op}}>
        {tx}
    </span>
}

function getCodeResume() {
    return [`defmodule Portfolio do:`,
`  def render(:fast, html) do:`,
`    GenServer.call(FastHtmlRenderer, {:render, html})`,
`  end`,
`  `,
`  def about(:identity) do:`,
`    {:ok, "Hi! Anicet Nougaret, 19 （＾∀＾●）ﾉｼ"}`,
`  end`,
`  `,
`  def about(:experience) do:`,
`    {:ok, "Does making this count?"}`,
`  end`,
`  `,
`  def about(:education) do:`,
`    {:ok, %{`,
`      :name => "IUT de Paris (Descartes)"`,
`      :location => "Paris 16, France"`,
`      :field => "Computer Science"`,
`      :graduation => 2021`,
`      :isItCool => true`,
`    }}`,
`  end`,
`  `,
`  def about(:hobbies) do:`,
`    {:ok, [`,
`      :coding`,
`      :art`,
`      :reading`,
`      :writing`,
`      :makingVideoGames`,
`    ]}`,
`  end`,
`  `,
`  def whats_up() do:`,
`    {:ok, "Looking for an internship")`,
`  end`,
`end`]
}