import Html exposing (..)
import Html.Attributes exposing (class, id)
import List exposing (map)

theArray = [1, 2, 3, 4, 5, 6]

createListItem item =
  li [] [ text (toString item) ]

buildList collection =
  List.map createListItem collection

builtList = ul [] (buildList theArray)

main = 
  builtList
