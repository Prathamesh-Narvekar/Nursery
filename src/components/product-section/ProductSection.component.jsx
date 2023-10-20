import React from 'react'
import ProductLoop from '../product-loop/ProductLoop.component'
const ProductSection = () => {
  return (
    <div className='m-5'>
      <h3>BEST SELLING PRODUCTS</h3>
      <hr/>
     
        <div className="col-sm-12 col-lg-3 col-md-4">



          <div className=" card m-4">
            <a >
              <img
                className="card-img-top product-img"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBgUFBQZGBgYGxsYGxgaGxgZGhgZGBgaGhkYGRggIi0kGx0pIhobJTglKy4wNDQ0GiM5PzkyPi0yNDABCwsLEA8QHhISHjIjICkyMjIyMjIwMjIyMjUyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAEUQAAIBAgQDBQQIAggGAgMAAAECEQADBBIhMQVBUQYTImFxMoGRoRQjQlJyscHRwvAVM1NigpKy4QdDY6LS8YOjFhck/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAAIDAQEAAgMBAAAAAAAAAQIREiExQQNRYSIycRP/2gAMAwEAAhEDEQA/APQzz/F+gptPOx/F/CtMFZrOFOFNFOFAOFKKbThQDhTqaKKAfSikpRTItKKbSg1QOpabSkUgUU6m0A0A8GimzThSAYgCToBrPQdacKyPbniAFlbdu6ubOpdQwPgUMSHHNS2QZTv6TWk4ZjVvWkurs6husE+0s+Rke6ox/SZZWT4W+0kb+8frTzTF3PqP1p5rRRvM+n609qYNz6U40oBRRRVAtFFFAFFFFAFFFFAFFFFAFFFFAVDfa/F/CtNpx+1+L+FaZUA8Uopop9AKKcKaKWgHiigUooBwpRTQaWaBotLTc1LNPZAidK8u45wzGYO6xwz4g2lAYXMzEagyrwYYiNyI29D6TjsYlq2924YRBmJ/IAcyTAA6kVnf/wBg4Ialrg/+Nj+U1Gcl6t0msV2Z7XX8M2V2a6jEkq7EtJ1Yq5khtz0OunOvVOE8Xs4lM9pw33l2ZCeTLy5+RjSsBxfj3A8QGDKy3GBAdLNxXDnZoUAOQYPiBmsfgOIXrTi5bYoykgtquYTqcpglTE5TU48sZ32ndj3LF4s27lsEDI7FCx5PEoPfB+FZLtFx83CVRittZ8s/m3l0Hn8PN349cZvHcuGWJJzGNTIME8vKpdnHs0jvDBHL4+81h+vLKa3qC5J+LxObUsIHy9flpWt7PdorGDwyW3W45JZiy5WSXYsQssCBr011POvNMbjs821BMnrJPQfzzFSsMWUBWPRY5D3fCl+H5/8An4U6e48I4lbxFsXbc5SwEMIIImQeXT41Ymsf/wAN7mbCHqLpBHQ5EP6z7615rsl6azw3mfSnmmD2j6U804YooooBaSilqgKKKKAKKKKAKKKKAKKKKAp2+1+L+FaaKc32vxfwimCoM8UoplPBoJnz2vsJfbD31ew6nRrgGR1M5XDqTCmNzA5Eg6Vbca4mmGsPfbUIshZjOxIVFB82ZRPKZqF2m4PaxVlluL4kVmtuPbRgs+E9DEEbH4EePYXFtpqdAIBMjKBGUeQHLoDU5ZaK1Y4rtJjblwXjfdWnwqhK2155QkwRp9qSRvNewcE4h9Iw9u9EZ1BIGwYaOB5Bga8Px7ghWEADQ9Bpp7t69E7L8Ye3hbOEs2zcxUOxQnKlpHuOyPff7AIIIUSxkQNRTxu4nGt1RVPwy6veFWvG/eX+sK6W7c/ZCg5U9CS515bWpams8mms9cy1cnelsKvtbw18TY7u20MrBskwrwCMrH3yJ5j3jz632VxbOUNsrAmSQEOoEZpg89ulenvcNQeKm41t1t+2RCmcsSYJnyE+dZ54S3ZXHbzu/wBkO6Uk3A14EFbVtS53mGI9gRzqnv2CBGsyQREERyIrc3uBY23bAw+KAaZZSMimd4aDPvFUeP7PcQMvcRbhc+IpDNMiGygA8oJjYn1qLMkXFm0wwLAHnH5CrngXZW7jHcKVRUYBi0yFJYAhQNfZPSY3507DcHuZj3yPaRFJLurKJCsVQEiCWgxy28p1PYzFXMz2bZXO/dlnOqoiB87gfaJLJlB5vrsQZx3y7Vhj1a1VrD4Lh9tSERAPCGyhrjn1AzOeZ6eQrKdpjgr9vNh2CXFdrjAo6d5njP4iIzSAQPUCr3F9i7dxzcfEXmdty+RvdAVYHQCAOlQm7BEexeXfTMhGnnBNPPL9ZdYzc/6qyaT/APh3hymGZj9u6SPQKF/MNWuaqngfC1w1vu1JYlgzNrqxGsDkKtjW+G+M36JNGD2j6V0Nc19o+ldDVAUUUUwKWkpaoCiiigCiiigCiiigCiiigKZj7X4v4VrlNK7e1+If6RXHNWezds1JcdoOUAtGgYkCeUkAkD3GuWanI1MKr/8AJRacW8ZabDkmFuEh7DnoLgAj0YCvOe0/Z25hLhdFLWCc1t11UKdkY8iBpPMajmB689tXUo6hlYQVYBgR0IOhquwvCDh5+jMch3w7nNb137tjrbPlJXyG4m47TY867FYK5cvG4GCW7Ss1y8wUhFZGAZcwK5/tAmQMsmYg32FNzFA4fhqtYwpM3sU4Oe6ze0czeJ3Pnrr4sohSuHwIfGYoG4beCRxduoZth7jovhbY5cwaRMaAAGZrQ2eK3nhMJgiLa6K909xbgbZLcZyvuHpRhNTRa0tuGcOt4e2tq0uVF95Zj7TuftMdyakMaS0WyjPlzRrlnLPOCdYoeeUz6j/eqUQmuF9wI8yB8TFQLrvb8hvBOVYHIwT3fLxqco+0q71Gt4pnVUac6XrakkAMVLZlLAbNoynzQ8qi5fC2nhwZ8mKjzhQT+vwp2Wq/CPmyT9o3rnua7kT5XPlVtFGN3NnKYqV2Rai4rGW7UG44WdhuzfhUat7hRhuKWn9lsx+6AS3vA298ecVXQHHsMLmEvodZtXD71Qsp+IB91Uf/AA9s63HI8WS2s84MkD5CtRj8O72LqWwC727iqCYGZkIUE8hJGtQey3B7tjOLigBltgQwOqhgfzFK43cq8bONaBaeKQCnCqQYu/vX8q7NXJdz+IflXU0AxfaPpXQ1zXc+lPamBS0lLVAUUUUAtFFFAFFFFAFFFFAFFFFAZt29r8Q/0iuWanP9r8Q/0iucVmZ612WuCim4rH2rQzXbiIDsXYLPpO/uoCg7T9shhn7q0ge4IzFpyJIkAgas0EGNN/dVfwrtLxHEq6W7aMyAEsgyZJ2XM7Fc56dAaz2PSzdxtxvpSLbdy4unMQocyQBHtDbpzmvUuB4axbsouGKm3uGUhs5O7Mw9pjzpY7qe2Nwg4jfvO9uzbt/WFnNyCiXFRLegM5mVUEQDBZjInTcWnuW7ai5NxwPG6rlzHqEEx7+m9VnBHuG3e7tRLYjEkM5OSe+cbCWIEbaeRqDcwvFwSwv22H3VCD3AMo+Zonh3pc3uO2wpKgsV3XYiPjOkmRIMQNSAemC4ktwxOhysp8mJXKeUh1K6feTrWO4jiL48WKsFG275BH+cAlG9xBHKdqbgMUD4EPtAhT0doKR6Olr3J51hn+mWN78RcrG9xCyp0nmORnlB5Vm7rd3eKskFF70MPZdLSXDoOWUkAdM2XZRVpwXjCYgskEOgVmHIhhMr6HT4dapO02LFz6y2qulkhJM5bhu+F1Vo1CzbEg+0/lV5WXHlDvm0A8XKW1aCoS2LcSZLWhl3EETcuW2Mfcp2ExuMvGRcIUAFj4SEkRlGkM5OpkQp8IlpiiuYr6RcS3ItoWuOxOyhmLsTprlVBpzKgcxVthsaLoVLalbKOMlpWALBFe4zXG3LtkS3qd7hPIVlhl/aJWiwnZq37d/xk7hiSP8AEd2PqYq3w5UMVWAAYAEAADQaD0qsweCdsrPclRJA+yJ5onIbxJOh0610x2GW23eEDKdCW5H15Tv8a6cemmmksuKlBhWdwuOEaB2/CjN8wtWFjFkmDbdfNgoH5z8qvkNLFzSA1zQ9aeKRkXc/iX8q6NVfiOIJbYyGOoOg0gDWWJA5/wAwaLXGbTSZZd9CNdOgBNHKBOX2j6CujVVLxZBcCP4Q4ARwwZGeBKFhs/lz5GrRjRLKNilBpoNLVA6ikmlpAUtJRVAtFJS0AUUUlALRSUUBmn+1+L+Fa5iur/a/F/AtcqzM3Es4tubYzOFYoDsXg5QfKYrzHE9ncfcuF7ll3cnV2ZNffmgDyGlepKac9wKpZiAAJJJAAA3JJ2FK47Kx5rhOwWLc+NrdoeZzt/lXT/urc9nuzNvCKVt3HLOQWeQBI00QeD4gnzqI3a2yxK2Ld3EEaE20YoPVzy8wDRiuN3Htsnd38M7DwXe7zIjSMpYkaKTAOmxO29OSQaiV2WxVtcKme4gZ2uuZYCS9640wTpMzFTsdxe3b17y0NJl7iKPjmnpuPfXkKdpsUlkWFcKigeA20Mq/jBbMpmcwM+Yqx4FibrrnsXMjoCWV3AVwol2XN4TA1KsdJJBA2nkMr23uO4gbthygGdPHbe2c/jtwxAETP2SNdHk+EzVZiFS/auX7aC3ctLbuOBouV0JYjqITvAd9YOpMUrXc9uTnw2KV1csQ6C4xHhJkBFzCRkbTfKfaU51OL3EKSSMvhXLOWAbkKddR9Y4g7BjvWec5blZ1cW8TcLnuyVNxO6YA5c3iEoT9nkJ6a1rktW+6xHDx7dq3KN9/wI5YdD3mViP7y+7A/wBIqbjsoyB2DqoPsPJIZR5ZmEHkeehrRX+I3PHf8Iupda3cUbZLthLeYeWe1p0JE1nj/jNJnSnxWGIvFnhVabgA9kB2MQOgIIjopqx4IMOXuX7inIhLIjKCAWMJ6mEGu2oqm4txBmuZGQaIioVMyjDMvqSWn40NiLlu2y5iGUnaPCQwtyq/eGWM0TqYjLJjDHVOdVqbfactma2unPLtz1jppvudPQT8Dce8C3cu5GoJIGRuRAZonT5VjcLYupZZCWCiWZEgMWKgqbrnVQFI8A1AgnLmk6PgGGvOBlHdoCdUW47mV08QIWPUz61rjMrdWtpl15202CfE7dy2nIlAfz1901OfF4lRJsMR5FGPwBmqs463ZI7y5i9IEvbdlHvyZV6zvV9gMbbugNbuFh74PpP6VrMf7Vy/qItvjLxLWmWdpVjOhMCOehqzW9InafyqqxP9Xbf7rIT6MCn5uKnJtU4ZXerVZya6gN1VJYwII1PTL1qtx/aC0hb6tnJjZRqCcqAZiJBOgA3JMSZqTcshj4tRmGnLaZI51VWeDSS1wksxZiZ1DPoxnqEi2p3VQxBlqu2/GVcMTfTEW3ZcO6hgFBDDeQFYT4TDRBB58wdZnDOO3Ettbxej21EvBhhIUE5Q2plTPmeQNS3w5eUUlAMsZYEZQMoAiIBAO2kaRXHE4UO/d30BcqQjozLnWDmVZnK8EypMGAdQCBOtXadaWfD+LpcZrc+NROXbMv3l/XpNWSODsR193WvKe0+FvYW4uLszCQ5ZQVlds7oPCG2DMnhYHUKfaY/GRfuMfEou2ijIJOVw4IAHMSqkDzinl+lnsLlp6HieP2wy27TKzsSAWkIqqYdy3NQdNNzoOZE/DYpHUFbit56AGNDA5fzvXlX0qA1sv4AbbXDIJCAQ6KsRm1C5TMlcx5xJtY1kKBEVQ5thEBMBWdbYZ1EnMDOw6HcCon636OT1aaWvP+GY3EXbiJbusqwZQnKzt7QUToJQkiRrEmdI22HvtCkjRgCCNdCBE6DrO3WtsM+SpdpVFFFUYoopl7Y0wa2IUfaFLWZxU529aSgOjn2vxfwLXMU520b8X8K1xz1Bu4NRuJXrItsL7IqOCpzkAEEagdT6a07PVZxLgVvEXUuXCxyLlyTCt4pE8+ZmN9OlAMucYKogwWHzp1VHW3A0hIXU+flzrviOKi5hL7Nbe262rnguDKT4CAVn2lJMT1q0RQAAoAAEAAQABsAOQrN9vXdMNnVMwzBGY6d2rhhnEcyYXp4tqL50FRxfhtrEW7IXIl+1bt2zmuKMyqijK4MQR7QInSd5EVacSW3hhhu48aOXF1XDN3h0YlcsMjABcuoKxvE1a4bttbCBDhomBAZCAPJckA+4/s27w61i0d7dwJeZ/q1LwMq+HIWYfWMfa0YRoAIEGLEXtrOEcew2NskXMgYrluW2+Gk+0skwRtPI1h+0HZ63adgIysAASdQc6ypMiDkk+LpodRlqOIYdsPc7u7bYOOblQCOTKRoynrPzq84bxBlD2LtpHCZHUuDnhikIDlIIIuJoY/rN9hU7t9TvbKYgNC6NJ01A11gQRz3/AE3irZ+IG4jlgVdmQEDZgqoGDTqPEltgPx1G4phu5CEHNnWXRpDI+mdCOmqlW5zyio4vFma5MljmPXOJknqTM1GXUTVljMQrtmRMrI5YNqT4kUquv3TlI6Zj0qy4Jw9WzM5yImQbQWvRlVdPERmL6DWDA1qrxKomYq51ueErJBglSwPogarrDp3dtGbMzOxFjDp7TQuV7j5TIB28gOmlKRWM3Wsw3DraWmtomiqwggMZhiWcjwi4WJO5yyYA1JsuzzHu9eYU/FazyWOIG2GUqAf+WGl1XbwtAB05En9KfwZb1y2e6uQcuYZp8RkjIYjKQRHlVS6yjomtVuUNcnsoCbmUBgJzDQmOTEe0PI1S4S1iHUN3gB5qWcEHp/vzBBrq+HxAUkupABJi5c2jXSK153+C4z+U+5ZLWWUb93p+ILK/MCuNviNtVWWktBVFBZ3kTCoNT+Q50ziVu40d1dKMCQFAnOYESZ8IEEk+foDT2sVbwqsLhZ7g+ryro9whoRF5qp0hdtZMmTWUutVWXlS8VxJ1JJHcS0AOyu7HLoMgbKPXN612s8RJIVnVmI2COvrBGaR5mKyuDwmIv412ZkD2iiEQWtrnDFlABHhQSCPtMAD7RNbWzZFlMocTzZ4BY/ecz8gIGwAGlaY3fbGdouGxdg3GDKoJIElREk7ZtRJM6EyelcOKYq2L5wrNlD2xcQk5gLiuwKruyOAFYRpo2hqPx2wGV7neqr6KGWArLILI66l0gGRm6xFY+/x5UfD3O5CPYYvmWQtxWypcykr7EEGJJUMeVK2+FlWgwuPe3dVb0G3euG267Il/TJcT7i3AwDAafWBhBzgZ/HYIYS5eVSYRQ9sbwrgIgPmhdNetvatT2rxNprZFwFXcKoDqYGVtchBifFOaTBCelYrimOD30e85IaMxYeKEckz1mWE+flU534muuE4SyYf6TdU5GuKltSSM7al38khXUHrryE63hXDxeS21+LbM63woH1jqrZ+9eB9Vb8ACINAJJJJ0qe1mKZ8Ja78BAdbVpZzIhVFz3RzOWfTvVEaGu/BOMFi7FrhyjO3dBgWfRc118pyooEKnJUOhO6mploRuMeLFoG/AEIuqxELlNuOsZQABvNS8NfuNbDBUBj2M0lR0Zhpm68uXnWd4fZQXFuXypIEIrkhkJmHdH1XNlhdwsAby1aazeRx4Wke/T/FW03va4fbvk7rtuPtD/DrI8wTNdlYESNRUUo3eow27twx6nPbKT/8AZ8T1qSo/eqM6aDSUUBz7lPuiinzRQGUc6H8X8K1xmnudD+L+Fa4g0jdRTg3M6Aaz0ArmKa9vMQG1Uax94zpmHMDeOp8qAhrxHEXH+osKbf8AaXHKB/NFALR0Ma1w7WM7YXu3VQLj2VJDz/zknQqNOU+dTeM8VXD2jcbU+yi82cgwPTQk+QNZ7E8Oe3g0uXmZ7zXrDuzksVHeL4FJ9kdQIEz5UCeu+K/4e2GuZrdx0QmWTRiBB9hzqDMe1POtVheHW7dpbFtcttRGXedZJJPMnUneSa7g1zxFwAQQdehI+a+L4Uy0puKYGyT3YstebfJE27eYR7RZVtkjXQ5iJPMGsfiuEd2biuz2S1thbc5MjsriLbxKh4KeLSQisPaM6TG429ZYm2Qq6kpeuZ0JO5DAG4hkjUsV3ECufGr73bL3AE8ORsjAq7ZYZirq2UxMDLmmRqJETU3TM8U4wuKsFXthHt2w1v8A6oyqSDI0YQSIOu3kc3dXu3ZdCdhr01n4SI6+la5sJhFtuIYnuGdWkEBkKsrgD2TnV5A0yt5ms1jVGeTBOZjIkmD69NeVZWoqTg8zrbCrnLMVUfhCgZfOTuetbLhWKQOzs1x7zJlzWxbCoiKGZc7QgVZGYnSWE6msbaxvdkd2MjKtzxEAwH0JWdJyjLP/ALqdce7awyiDLsC11wTnUMFREUzltZoMtlViDGYQKWM2rC6u2/4bcuuAXZwYHiARUVYlWyEkqSIOUyd9QCK59m3YZguVipZWGgnx5sykdZnXruKy3BsDi3Q3LjXDbYkysu1zWc5RmUm3zAALHUxqJn4TjAwzs7/WK5IDIQGJDEDMDESW16SOlO73GmOXT0DDuMunz0IPQ0mJbwN5iPjp+tYdu2V8n6uwpE7nM2nmQR8fkKe/a69tcsoFkagtyMxO06VpcuimU203EMYbYPdjNduOEQaTqeXkq5m6aSehp8FgF+nEzmFnKZg63XUZ2E6nKpGpJMuZJIml4NxG3exPeZ1VVtwisQGNy45zQCdSFWNN853qzxBRLqBWXMTczLIzZnOcEjcCc3yrL5tc1lVRwnGfR8JdxTKWNy610gEAw4DLE7+1+dZnHYlsVcVmbMGnITujDxFD1QiTrquhkLodTx+0Fw6W1JABCqZIHgtjRuTAgGQdgGbXKRWZwmG7pCCcrNpJ3UdNecH8utaTxjlNdOeHtDP4XQKjSc7MweOWS3LQD1ImNhV/j8Rba1//AEtYu2tP6lGBgwuZI/q3UtAzRIYiTJAr8Dw647AK7nYs2ZlhQRCgKw1YzBaFhTGsVN4vwW3bTvIDrbctdHgNxVbYltAwWVchoHhnkQy0JGXx2Lu3S9x5KoRIJMKLpVo2gg92PTIsaAVSXAbjOzTMltdzmIzfMfzNTeIYY2BcsMqA+B1OYF1SMuTWNfFDCJlCeU1VpeYbiATM9J5Tt7vKospN9xDHW+8W5cuSj27Ye9lLhlUZnRF6ZrluQNhkU6Ag6DsnxG1cIByoJzosoRI0XOwOrqAYG2x5KB5d/SUqAGZUtqAgbxAOfbuRzcGAOQhTplg7Tszw1l1tk22e2ly2q+Jy7lgiFjMBcpe4sjRwDGtV3LudiVvOMFMyIiO1720a3AZBtmdzoEO2UzMaDSRIRbujtaQMxGbK5JBiM6yANgARm2A3jVODIwXMwhnH1i8kuqxDhf7p2HKEB562daTvtogXMcbYl7ZKL7TINU5yyfd81J57VMsX1dQyMGB1BFdBWft2DYxPd29Euqz2xMBLiQblvyRgc3kQY2qr0TQUU224ZQw2IBE6HUTqORp1BiikooDHM41BIBzc/wAIpgj7w+NRc1z+0+Qpc1z+0+QqDTAR94fGnCPvD41DVrn9p8hUHtCrthrgZpEKYgfZdW/SqCXxJ8Gcnf3bQyMHXNcVYYbGJ19DpVP2r47g7uEu20xKO/gIVW8Ry3EY5TEEwDWO7pPur8BSGyn3F+ApbhyWPTrHaXBlVLYuwGIBILqIJEka9DUq3xPDXCFTE2mJ0AW4hYz013rypLajZQPcKuOzik4m3BghiZ32Rjt7qexxej/RbSgyEg+0Wgk6RLM2p061l+I8INr67CkIgPitmMpGvjy7qBMGNcpOmmtxib13LJuZSdQoAECYDXH+yNjp6CTUA8PvOmmKZiT4mDk+ESQisNJ5THM6HShNjCcTxfjdYy5XaFMHKrsc9uNmXQDoYPJqg3z45EREA66jQg685LfCp/F8HkuMruGZGGrwAVVgQGA0Ay8gABIECmDCgk76HQHfJLx6mOlc9sjNGtOCO8ChgiEQT4dXyqY+1BcHLzy66SDoOFXEFnu3tkgFCQ7QGZYyF22BEAhNTtCnWqjh3DC91E8WUN4lWZ8Go1Gu7ECNd4I3Gnw3BrtvUIlpdTnhLrrqSYn+r008OY6VU1rpeM12usJxW4dChG5BfMmYDU5ZUEx1IFee4/iLXbmc2znuEMu+uYCGy/dOhA56GvQcPh3RCmbcEFhqxkb5o31rLcb4c5xUIJZkXKeWbOGM+QWflVdRWW7FU6NlIaZQZnM7agR0EEkRzMedJZxTHVXJjUK3PUD0jb0mrq5ZyvdS2d3XvHAMl0uM6Jb+7lZhLfegDaa7p2ZCznGrMD10jMxJ/EI8wPOajLrtEwtqnS/IDFcpJPjU6EqROnLcfCpuB4U1zNcVwGQBg06gggTuDpMz8q6YzC2bQFtQS+WGeHI8W66tlJ5xBGo86rreKZArsSJOsE7bR6aR08hRcdzsf63tqe0+P7vKCMzFQdht6iSfEmaCNwCDuDmbXELzMTJYOZytquXXMWU6R4jr12qPYvNe1ZiX+8T9n9QDOv6SRI+jvEiQyn0Y9dN/dv1Amnq/Syy3drzhys7MvesrESUQd2oll3UaldgddB6QWJhcRbDtaUIxBDDKHzpElXWCCdI1Os8tRUDhXEWS6jEgAMFLzICyA8+WWa9IsluTD4D1/X509bVj28m4iHuBGuhgQoClhIZSvhOcQWPgXUySFqhw1gZuftRvt0n8q9i7V4LNh0EAhGXKAACNIEHoIBjyFYbhnD0VRcMf8tm8AJUC+ln0Elwx61N3Lorj2p+H8K7x1QjMCC2Wco0ZxBbXwgJqd/FsYrZcHuZPHdxdwObaolrC22Z0QhSXc5CLcwGMSSANTzgdmbAZmto/iVio0JAL5LaZjt/zLzROoU1u+E9kbVguPbDIi531fOrXCzqw1SQyCFj2B5k3j3CkWvZ+/bNsKlxnA27xcj+9SAT6ke81be8VEwyOqwSsgxIUDN0YgaSRv5zyruC3UfCtIt1+FR8ThQ72nkA23LjzzWrlsj/vn/DXSW6j4US3UfCmD1UAcv8A3rS/Cuct1Hwoluo+FAPj0+NFc/F1HwooDDiloGXr+dPlev5/tSMqio/FknD3R/03+SE1IDL1+R/am4gBkZZOqsNjzBHSgPNBTSaE2FITUtHRWq87IrOJH91Xb5Zf4qz5OtabsUg7526WyNid3ToPI0fSvjbzXE2lGoWCOaiD8t/SuhYefwb9qM6jcke5v2qkMP2kwqu6ILLIHldQoLsWBYgFtSZU6xJaq9CZ8XtOLnoMiIVI8iTt5fHSdocZYZ7bLcVyhzEAzlh7ZBb3hf8ALWYxN4JetIJK5Awnds2dDPmcq/CubP2xOmi7JYfKC5GpUPPUsWA/X4VqLg091ZPhXE0tLDkAZUAkgbFzz051d4biTXUz20zrJGZIcSNxKk66jTzp/ndTemkm5NOjHWomJcJdJkA5FYT1DP8AtT7l887bj/A37VAxrJcZWYwVECQdgSefrTzylmmmMsqRgsPaUBSwIChZ6xqT6ljmn+6mu9TcTiASgVhMn8qiPjsPztp8F/ao1zE2jcQW1CnxTEa7dPfSt69KYyfFX2kw9tLlt7dwh7hPeISpRIgFxOqkk7bHU6RWcvP7SGJBDCDIEgHLPWNK9FHALV2O8tqW5sJUkjSSQZoudjMLubWvUs5O0Tq29a/GOWG6864JfFu6JI5wSSBoCSJHL46x1rQF1DiDKsDroOXwG0x6cgKseK9klyqMLbRGzAMWkkKd2BMmRrz5zuAR0wPAUtRlc5wNGdQsEpcZGCHbKUHUEuqySDRpHGo54cWdLjE5E3J0yCPZfQmCRoTKjKwPiJUbHhVorbUHlPKNJ005GNx1mopwku0hshkCVMFHTVdtQMyoepsg7kzaI6qJ1gCdjsKc6VIr+1t0JhmMkQymRuBmAJHuJrGdnQGtYoMILW0dQYPga4lxI8hKn/EK0faHDYzF2+7siwqGJzs4eAyPuFI3WNtiaq+G9kuJoQpOG7solt8rOXKIEygMUHO2nwpZ4W9w+kzsHZm5IOg8cdcqMhn/ABXAfUeVehCsd2U4DjsK5zrhihkSLlzOoJDGBkg7cyNt62X87Gn+eFxmqOvhaUUafyDQCP5BqwWiaMw/maMwoApKdmFJI60A2aKXTrRQHn4c0uc1TjiLfcH+b/al/pNvuD4n9qjauK4DV0U1SrxJvuD4mui8Ub7o+dHKHxYsyPD00+GlcyK64o/WP+Nv9RrlNCjXNarsODN1j0tj45yfyFZRq0nZjEMlt8oBlhqZ5KOh86Wys22eapeCsK4IdQytoVYBgR5g6Gs0eIXOifBv3rT8IuSik7lQT6kSarG7TZpIHZnBMCDhbcEQQFgEHyEV3HZbBMyucMhZQArGSQASQNT1JNTrTVJR6vUTpDTgGDEEYazI2JtoSPeR5U7iGHHdwABl1AAgCN9PSpweouMeEYnkrH4A0eQtMpjk0qhc/WD8LD/TUu9xZyNQnwb/AMqp+/bvASV56AEb+cmsM7uN8JqtNbszr11qJiMJN5IWQFJOg+1KgHrzpcPxFwoEIYAGzdPWkTiLd5yHhGgHmfM0WzRau2nwNqAKniyDVLhuJMNxPoAKsLXEp5fP/aq54lxqU2DFdrFqKi/0h0X50wY24fuj4z86Vzg40nFbTZVY65SQT5GIPyHxqpxL/VvHT5c/lUnjGNYW9NSxAGmnU6D0qkTHvsQsHkVbbp7VHKJ4rfhN4ECr6y4rDYHEFHKiTEcidDr5/wAitPhcQSNjWmN6KxdZq5E61CuYggTFcFx79F+B/wDKncoJitaWqz+kG6L8G/enfT2/u/A/vS5QcasZomq76a/Rfn+9KMc/3V+f70cofFYUVX/Tm6D4H96PpzdF+f70coNLCiq76c/RfiaKOUGnnAs9B86f9HPQUUVg0H0akbD+dJRTgZziGGfvHgAgknQ9eWtRxhrh2Q/FP3pKKojxgrh3UL+Ij+Ga0XBLIRIzcySY5wBp8KKKVCzIXzPwq54VfhQOmnupKKePpVf4e7UxLlFFaRDp3lU/aHGZbJUbv4fd9o/DT30tFGXgx9Yi8KhsYO1FFYVtEhGPQVEuYorfTzGX4xHziiilTjUYG4zflH6GrZM2/T0P6TRRU/TdDcYRPPpHWOldrbmYnUj9tfmKKKRKrjF2WVfuiee7fnoBUEJRRV/EVDawWuZldhGmh0+B3q3wt9wIDk+oH7UUVWNFTFdyfE0+XL4V2FFFUR6mukTRRSMECkjyoopwFj0oiiigCB0ooooD/9k="
                alt="hb"
              />
              <div className="card-body">
                <h5 className="card-title">Dummy name</h5>
                <p className="card-text">Rs. 23/=</p>
                <button>Buy Now</button>
              </div>
            </a>
           
          </div>

          
          

          






        </div>
  
      <div className='row'>
      <ProductLoop/>
      </div>
    </div>
  )
}

export default ProductSection