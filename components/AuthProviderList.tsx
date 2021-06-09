import React from 'react'
import UiButton from '../components/ui/UiButton'

interface Provider {
    name: string
    id: string
}

interface Props {
    providers: Provider[]
    signIn: (id: string) => void
    justifyContent: string
}

const AuthProviderList: React.FC<Props> = ({ providers, signIn, justifyContent }) => {
    return (
        <div className="provider-list">
            {Object.values(providers).map((provider) => (
                <div
                    className="provider-button"
                    key={provider.name}
                >
                    <UiButton
                        iconCustom={`/icons/icon-${provider.name.toLowerCase()}.svg`}
                        text={provider.name}
                        onClick={() => signIn(provider.id)}
                    ></UiButton>
                </div>
            ))}

            <style jsx>{`
                .provider-list {
                    display: flex;
                    justify-content: ${justifyContent};
                }

                .provider-button:not(:last-child) {
                    margin-right: 10px;
                }
            `}</style>
        </div>
    )
}

export default AuthProviderList
