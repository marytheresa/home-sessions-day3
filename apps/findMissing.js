module.exports={

findMissing: function(arr1, arr2)
{
  var len_arr1 = arr1.length;
  var len_arr2 = arr2.length;
  if ((len_arr1 === 0 && len_arr2 === 0) || arr1 == arr2)
  {
    return 0;
  }

  else if (len_arr1 > len_arr2)
  {
    for(var i=0; i<=len_arr1-1; i++)
    {
      var x = 0;
      for(var j=0; j<=len_arr2-1; j++)
      {
        if (arr1[i] == arr2[j])
        {
          var missing = false;
          break;
        }
        else
        {
          missing = true;
          x++;
          if (x == len_arr2)
          {
            return arr1[i];
          }
        }
      }
    }
  }
  else if (len_arr2 > len_arr1)
  {
    for(var i=0; i<=len_arr2-1; i++)
    {
      var y = 0;
      for(var j=0; j<=len_arr1-1; j++)
      {
        if (arr2[i] == arr1[j])
        {
          missing = false;
          break;
        }
        else
        {
          missing = true;
          y++;
          if (y == len_arr1)
          {
            return arr2[i];
          }
        } 
      }
    }
  }
  else
  {
    return 0;
  }
}
}