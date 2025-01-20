import { type ReactElement } from 'react'

interface Props {
    description: string
}

export default function ListingDescription({
    description,
}: Props): ReactElement {
    const formatDescription = (text: string): string => {
        return text
            .replace(/\n/g, '<br />') // Replace line breaks with HTML <br />
            .replace(
                /Other Details:/g,
                '<strong class="font-medium text-black">Other Details:</strong>'
            ) // Bold specific sections
            .replace(
                /Condition:/g,
                '<strong class="font-medium text-black">Condition:</strong>'
            ) // Bold specific sections
    }

    return (
        <>
            <h3 className="mb-1 text-lg/normal font-medium">
                Item description from the seller
            </h3>
            <div
                className="text-sm font-extralight leading-6"
                dangerouslySetInnerHTML={{
                    __html: formatDescription(description),
                }}
            />
        </>
    )
}
