# shoebox

Collections of models for everyone!


We believe that -

Models
* are by default "plain old objects" and should remain that way until we explicitly ask more of them
* have relationships to other models
* may be observable, dirtyable, and other useful features if and only if desired
* must be serializable without needing to clean up their pollution first

Collections 
* are by default just groups of models
* should be loosely coupled to the logic that generates them, whether from local or remote data
* should be designed for performance as the default, but allow functionality to be added explicitly 
* should be serializable, convertible, and cloneable
* may be sortable, indexed, filtered, and paginated

Relationships
* Exist between models and other models
* ...of which one such relationship is a Collection
* Exist between models and their collections
* Exist between collections and other collections

Shoebox
* should not have opinions on models it contains
* should explicitly extend and decorate with required functionality, and prefer to do so lazily where possible 
