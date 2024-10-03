import { Second } from './second'
import { First } from './text/first'
import { Third } from './text/third'

export function GridSection() {
   return (
      <section
         data-grid="container"
         className="grid grid-cols-[30%_70%] px-36 py-40"
      >
         <h4 data-grid="title">OUR STORY</h4>
         <First />

         <div></div>
         <Second />

         <h4 data-grid="title">WHO ARE WE</h4>
         <Third />
      </section>
   )
}
