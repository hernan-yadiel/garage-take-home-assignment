import { type ReactElement } from 'react'

interface Props {
    description: string
}

export default function ListingDescription({
    description,
}: Props): ReactElement {
    // Function to format the description
    const formatDescription = (text: string): string => {
        return text
            .replace(/\n/g, '<br />') // Replace line breaks with HTML <br />
            .replace(/Other Details:/g, '<strong>Other Details:</strong>') // Bold specific sections
            .replace(/Condition:/g, '<strong>Condition:</strong>') // Bold specific sections
    }

    return (
        <div
            className="text-sm leading-6" // Add Tailwind or custom styles for good readability
            dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
        />
    )
}
