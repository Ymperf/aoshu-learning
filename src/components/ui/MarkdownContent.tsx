import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface Props {
  content: string
  className?: string
}

export default function MarkdownContent({ content, className = '' }: Props) {
  return (
    <ReactMarkdown
      className={className}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        // 自定义样式
        h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 text-gray-900">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-semibold mb-3 text-gray-900">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-semibold mb-2 text-gray-900">{children}</h3>,
        p: ({ children }) => <p className="mb-3 text-gray-700 leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
        li: ({ children }) => <li className="text-gray-700">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-3 bg-blue-50 text-gray-700 italic">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-blue-50">{children}</thead>,
        tbody: ({ children }) => <tbody className="divide-y divide-gray-200">{children}</tbody>,
        tr: ({ children }) => <tr>{children}</tr>,
        th: ({ children }) => <th className="px-3 py-2 text-left font-semibold text-gray-700 border-b border-gray-200">{children}</th>,
        td: ({ children }) => <td className="px-3 py-2 text-gray-700">{children}</td>,
        code: ({ children, className }) => {
          const isInline = !className
          return isInline ? (
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
              {children}
            </code>
          ) : (
            <code className="block bg-gray-100 p-3 rounded text-sm font-mono text-gray-800 overflow-x-auto">
              {children}
            </code>
          )
        },
        strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
        em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
        svg: ({ node, ...props }) => (
          <svg {...props} className="mx-auto my-4 block">
            {props.children}
          </svg>
        ),
        polygon: ({ node, ...props }) => <polygon {...props} />,
        line: ({ node, ...props }) => <line {...props} />,
        circle: ({ node, ...props }) => <circle {...props} />,
        rect: ({ node, ...props }) => <rect {...props} />,
        path: ({ node, ...props }) => <path {...props} />,
        text: ({ node, ...props }) => <text {...props} />,
        g: ({ node, ...props }) => <g {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
