const decodeTheRing = function (s, p) 
{
  if(p==='*')
    {
      return true;
    }
  else if(p.length===s.length)
    {
      let flag =true;
      for(let i=0;i<p.length;i++)
        {
          if(p[i]===s[i] || p[i]==='?' || p[i]==='*')
            {
              flag = true;
            }
            else
            {
              flag = false;
              break;
            }
        }
      return flag;  
    }
  else
    {
      if(p.length>s.length)
        {
          for(let i=0;i<p.length;i++)
            {
              if(p[i]!=='*')
                {
                  return false;
                  
                }
              else
              {
                return true;
              }
            }
        }
      else
      {
        let flag = true;
        for(let i=0;i<s.length;i++)
          {
                if(p[i]===s[i])
                  {
                    flag = true;
                  }
                else if(p[i]==='?')
                  {
                    flag=false;
                  }  
                else if(p[i]==='*')
                  {
                    for(let j = p.length-1;j>=0;j--)
                      {
                        if(p[j]===s[s.length-j-1])
                          {
                            flag=true;
                          }
                         else
                         {
                          flag=false;
                          break;
                         } 
                        if(p[j]==='*')
                          {
                            flag=true;
                          }
                      }
                  }
                 return flag;    
              }
          }
    }  
    // write your code here

};
  
  module.exports = decodeTheRing;
