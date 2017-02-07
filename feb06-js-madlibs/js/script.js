var hello = alert('Welcome to Hamlet Mad Libs Edition');

var age = prompt('This content is age restricted, enter your age');
if(parseInt(age) >= 13){
  var ready = confirm('Are you ready to start?');

  if(ready === true){
    var verb1 = prompt('verb');
    if(verb1 === null,' '){
      var again = alert('You had one job, reload the page to try again');
    };
    else{
      var adjective1 = prompt('adjective');
      if(adjective1 === null, ' '){
        var again = alert('You had one job, reload the page to try again');
      };
      else{
        var verb2 = prompt('verb');
        if(verb2 === null, ' '){
          var again = alert('You had one job, reload the page to try again');
        };
        else{
          var noun_plural1 = prompt('plural noun');
          if(noun_plural1 === null, ' '){
            var again = alert('You had one job, reload the page to try again');
          };
          else{
            var weapon_plural1 = prompt('plural weapon');
            if(weapon_plural1 === null, ' '){
              var again = alert('You had one job, reload the page to try again');
            };
            else{
              var adjective2 = prompt('adjective');
              if(adjective2 === null, ' '){
                var again = alert('You had one job, reload the page to try again');
              };
              else{
                var noun1 = prompt('noun');
                if(noun1 === null, ' '){
                  var again = alert('You had one job, reload the page to try again');
                };
                var noun_plural2 = prompt('plural noun');
                if(noun_plural2 === null, ' '){
                  var again = alert('You had one job, reload the page to try again');
                };
                else{
                  var verb2 = prompt('verb');
                  if(verb2 === null, ' '){
                    var again = alert('You had one job, reload the page to try again');
                  };
                  else{
                    var adjective3 = prompt('adjective');
                    if(adjective3 === null, ' '){
                      var again = alert('You had one job, reload the page to try again');
                    };
                    else{
                      var noun2 = prompt('noun');
                      if(noun2 === null, ' '){
                        var again = alert('You had one job, reload the page to try again');
                      };
                      else{
                        var verb3 = prompt('verb');
                        if(verb3 === null, ' '){
                          var again = alert('You had one job, reload the page to try again');
                        };
                        else{
                          var noun3 = prompt('noun');
                          if(noun3 === null, ' '){
                            var again = alert('You had one job, reload the page to try again');
                          };
                          else{
                            var verb_ending_in_ed1 = prompt('verb ending in -ed');
                            if(verb_ending_in_ed1 === null, ' '){
                              var again = alert('You had one job, reload the page to try again');
                            };
                            else{
                              var noun4 = prompt('noun');
                              if(noun4 === null, ' '){
                                var again = alert('You had one job, reload the page to try again');
                              };
                              else{
                                var adjective4 = prompt('adjective');
                                if(adjective4 === null, ' '){
                                  var again = alert('You had one job, reload the page to try again');
                                };
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };

    var calculating = alert('Building your custom Hamlet verse');

    var finished = alert('To ' + verb1 + ', or not to ' + verb1 + ', that is the question: Whether `tis more ' + adjective1 + ' in the mind to ' + verb2 + ' The ' + noun_plural1 + ' and ' + weapon_plural1 + ' of ' + adjective2 + ' fortune. Or to take ' + noun1 + ' against a sea of ' + noun_plural2 + ' , and by opposing end them? To die, to ' + verb2 + ' , No more; and by a ' + verb2 + ' to say we end The heartache, and the thousand ' + adjective3 + ' shocks that flesh is heir to, `tis a ' + noun2 + ' Devoutly to be wish`d. To die, to ' +  verb3 + ' ; To ' + verb3 + ' ! perchance to dream: ay, there`s the ' + noun3 + '; For in that ' + verb3 + ' of death what dreams may come, When we have ' + verb_ending_in_ed1 + ' off this mortal ' + noun4 + ', Must give us pause: there`s the respect. That makes calamity of so ' + adjective4 + ' life... ');

    var stars = prompt('please rate this mad lib out of 5 stars');
    if(parseFloat(stars) <= 5){
      var thanks = alert('Thank You');
    };
    else{
      var again = alert('You had one job, reload the page to try again');
    };
  };
  else{
    var gone = alert('Well go away then');
  };
};
else{
  var gone = alert('Well go away then');
};
