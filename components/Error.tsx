export interface ErrorType {
    errorCode: number
    errorTitle?: string
}

const Error = ({ errorCode, errorTitle = ''}: ErrorType) => {

    function statusText(statusCode: number) {
        switch(statusCode) {
            case 401:
                return 'Unauthorized'
            default:
                return 'Unexpected error'
        }
    }

    return (
        <div className="error">
            <div>
                <h1>{errorCode}</h1>
                <div className="e-title">
                    <h2>{errorTitle ? errorTitle : statusText(errorCode)}</h2>
                </div>
            </div>
            <style jsx>{`
                .error {
                    height: 100%;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                h1 {
                    display: inline-block;
                    border-right: 2px solid var(--gray-11);
                    margin: 0;
                    margin-right: 20px;
                    padding: 10px 23px 10px 0;
                    font-size: 22px;
                    font-weight: 600;
                    vertical-align: top;
                }
                h2 {
                    font-size: 14px;
                    font-weight: normal;
                    line-height: inherit;
                    margin: 0;
                    padding: 0;
                }
                .e-title {
                    display: inline-block;
                    text-align: left;
                    line-height: 49px;
                    height: 49px;
                    vertical-align: middle;
                }
            `}</style>
        </div>
    )
}

export default Error
