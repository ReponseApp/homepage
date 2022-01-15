import { FC } from "react";
import { Custom404 } from "@components/Error"
import { Header } from "@components/Header"

const Error: FC<{ statusCode: number }> = ({ statusCode }) => {
    return (
        <div>
            <Header title="404 - Error"/>
            <Custom404 statusCode={statusCode}/>
        </div>
    )
}

interface InitialProps {
    res: any,
    err: any
}
  
(Error as any).getInitialProps = ({ res, err }: InitialProps) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;