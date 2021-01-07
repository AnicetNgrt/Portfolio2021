import styles from "./CodeResume.module.css"

export default function CodeResume({props}) {
    return <div className={styles["code-resume"]}>
        <ElixirDefModule moduleName="Portfolio">
            <ElixirDef functionName="render" args={[":fast","html"]}>
                <ElixirLine tabsCount={2} content="GenServer.call(FastHtmlRenderer, {:render, html})"/>
            </ElixirDef>
            <ElixirEmptyLine/>
            <ElixirDef functionName="about" args={[":identity"]}>
                <ElixirLine tabsCount={2} content='{:ok, "Hi! Anicet Nougaret, 19 （＾∀＾●）ﾉｼ"}'/>
            </ElixirDef>
            <ElixirEmptyLine/>
            <ElixirDef functionName="about" args={[":experience"]}>
                <ElixirLine tabsCount={2} content='{:ok, "Does making this count?"}'/>
            </ElixirDef>
            <ElixirEmptyLine/>
            <ElixirDef functionName="about" args={[":education"]}>
                <ElixirLine tabsCount={2} content='{:ok, %{'/>
                <ElixirLine tabsCount={3} content=':name => "IUT de Paris (Descartes)"'/>
                <ElixirLine tabsCount={3} content=':location => "Paris 16, France"'/>
                <ElixirLine tabsCount={3} content=':field => "Computer Science"'/>
                <ElixirLine tabsCount={3} content=':graduation => 2021'/>
                <ElixirLine tabsCount={3} content=':isItCool => true'/>
                <ElixirLine tabsCount={2} content='}}'/>
            </ElixirDef>
            <ElixirEmptyLine/>
            <ElixirDef functionName="about" args={[":hobbies"]}>
                <ElixirLine tabsCount={2} content='{:ok, ['/>
                <ElixirLine tabsCount={3} content=':coding'/>
                <ElixirLine tabsCount={3} content=':art'/>
                <ElixirLine tabsCount={3} content=':reading'/>
                <ElixirLine tabsCount={3} content=':writing'/>
                <ElixirLine tabsCount={3} content=':makingVideoGames'/>
                <ElixirLine tabsCount={2} content=']}'/>
            </ElixirDef>
            <ElixirEmptyLine/>
            <ElixirDef functionName="whats_up" args={[]}>
                <ElixirLine tabsCount={2} content='{:ok, "Looking for an internship")'/>
            </ElixirDef>
        </ElixirDefModule>
    </div>
}

function ElixirDefModule({props, moduleName, children}) {
    return <>
        <p className="code-font">
            <i>defmodule </i> {moduleName} <i>do</i>:
        </p>
        {children}
        <p className="code-font">
            <i>end</i>
        </p>
    </>
}

function ElixirEmptyLine({props}) {
    return <p className="code-font">
        <ElixirTab/>
    </p>
}

function ElixirLine({props, tabsCount, content}) {
    return <p className="code-font">
        {[...Array(tabsCount)].map((v, i) => (<ElixirTab key={i}/>))}
        {content}
    </p>
}

function ElixirDef({props, functionName, args, children}) {
    return <>
        <p className="code-font">
            <ElixirTab/>
            <i>def</i> {functionName}(
                {args.map((v, i, a) => (<span key={i}>{v}{i < a.length-1 && <span>, </span>}</span>))}
            ) <i>do</i>:
        </p>
        {children}
        <p className="code-font">
            <ElixirTab/>
            <i>end</i>
        </p>
    </>
}

function ElixirTab({props}) {
    return <span style={{opacity:0.3}}>||</span>
}

function Old({props}) {
    return <div>
        <p className="code-font">
                <i>defmodule</i> Portfolio <i>do</i>:
            </p>
            <p className="code-font">
                <span style={{opacity:0.3}}>||</span>
            </p>
            <p className="code-font">
                <span style={{opacity:0.3}}>||</span>
                <i>def</i> write_content("") <i>do</i>:
            </p>
            <p className="code-font">
                <span style={{opacity:0.3}}>||</span>
                <span style={{opacity:0.3}}>||</span>
                <i>IO</i>.puts("well...")
            </p>
            <p className="code-font">
                <span style={{opacity:0.3}}>||</span>
                <i>end</i>
            </p>
            <p className="code-font">
                <span style={{opacity:0.3}}>||</span>
            </p>
            <p className="code-font">
                <span style={{opacity:0.3}}>||</span>
                <i>def</i> write_content(html) <i>do</i>:
            </p>
    </div>
}