import { CloseButton } from "../CloseButton";

import { useState } from "react";

import bugImageUrl from '../../assets/bug.png'
simport ideaImageUrl from '../../assets/idea.png'
import thoughtImageUrl from '../../assets/success.png'



export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imgem de um inseto'
        }
    },
    IDEA: {
        title: 'ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imgem de um lânpada'
        },

    },
    OTHER: {
        title: 'outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imgem de um balão de penssamento '
        }
    },
};



export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-980 p-4 relative rounded-2xl ab-4 flex-color items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>
            {!feedbackType ? (
                <FeedbackTypeStep />
            ) : (
                <p>hello  world</p>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ❤ pela Rocketeseat<a className="underline underline-offset-2" href="//rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}