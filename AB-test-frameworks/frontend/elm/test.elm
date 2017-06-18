import Html exposing (..)
import List exposing (map, filter)
import Debug exposing (log)

{-
theArray = [{id = 1, name = "marcell"}, 
            {id = 2, name = "monteiro"}]

main = 
  ul [] (List.map (\item -> li [] [text (toString item.name)]) 
          (theArray))
-}

log (toString (filter isEven [1,2,3,4,5,6] == [2,4,6]))


