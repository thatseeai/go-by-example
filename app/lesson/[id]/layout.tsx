// Generate static params for all lessons
export async function generateStaticParams() {
  return [
    { id: '00-Overview' },
    { id: '01-Hello-World' },
    { id: '02-Variables-Types' },
    { id: '03-Control-Flow' },
    { id: '04-Functions' },
    { id: '05-Slices-Maps' },
    { id: '06-Structs-Methods' },
    { id: '07-Interfaces' },
    { id: '08-Error-Handling' },
    { id: '09-Goroutines-Channels' },
    { id: '10-Context' },
    { id: '11-Testing' },
    { id: '12-Web-Servers' },
    { id: '13-JSON-REST' },
    { id: '14-Database' },
  ];
}

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
