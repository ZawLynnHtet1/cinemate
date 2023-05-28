import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";



export const Search = ({apiPath}) => { 

  const [searchParams] = useSearchParams();
  const queryTerms = searchParams.get("q");
  
  const { data: movies } = useFetch(apiPath, queryTerms);
  useTitle(`Search Result For ${queryTerms}`)

  return (
    <main>
      <section>
        <p className="text-3xl py-2 text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for "${queryTerms}"` : `Result for "${queryTerms}"`}</p>
      </section>
    <section>
      <div className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </div> 
    </section>
  </main>  )
}
