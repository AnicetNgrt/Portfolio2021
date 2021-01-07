import styles from "./Header.module.css"

export default function Header({props}) {
    return <div className={styles.header}>
        <div> </div>
        <div> 
            Hello there!
        </div>
        <div> </div>
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