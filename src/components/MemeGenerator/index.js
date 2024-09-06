import {Component} from 'react'

import {
  Heading,
  MemeGeneratorContainer,
  ContentContainer,
  MemsFormContainer,
  Label,
  InputElement,
  SelectElement,
  GenerateButton,
  MemeGeneratedImageContainer,
  MemeTopText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// MemeGenerator

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextMemeInput: '',
    bottomTextMemeInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    memeBackgroundImageUrl: '',
    memetopText: '',
    memeBottomText: '',
    memeActiveFontsize: '',
  }

  onChangeBackgroundImgUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextMemeInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextMemeInput: event.target.value})
  }

  onChangeSelectedFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  // Generate form Submit
  onSubmitMemForm = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextMemeInput,
      bottomTextMemeInput,
      fontSizeInput,
    } = this.state

    this.setState({
      memeBackgroundImageUrl: backgroundImageUrlInput,
      memetopText: topTextMemeInput,
      memeBottomText: bottomTextMemeInput,
      memeActiveFontsize: fontSizeInput,
    })
  }

  renderGenerateImagewithMeme = () => {
    const url = 'https://assets.ccbp.in/frontend/react-js/nature-img.png'
    const {
      memeBackgroundImageUrl,
      memetopText,
      memeBottomText,
      memeActiveFontsize,
    } = this.state

    console.log(memeActiveFontsize)
    return (
      <MemeGeneratedImageContainer
        data-testid="meme"
        backgroundImage={memeBackgroundImageUrl}
      >
        <MemeTopText memeActiveFontsize={memeActiveFontsize}>
          {memetopText}
        </MemeTopText>
        <MemeTopText memeActiveFontsize={memeActiveFontsize}>
          {memeBottomText}
        </MemeTopText>
      </MemeGeneratedImageContainer>
    )
  }

  render() {
    const {
      backgroundImageUrlInput,
      topTextMemeInput,
      bottomTextMemeInput,
      fontSizeInput,
    } = this.state

    return (
      <MemeGeneratorContainer>
        <Heading>Meme Generator</Heading>
        <ContentContainer>
          <MemsFormContainer onSubmit={this.onSubmitMemForm}>
            <Label htmlFor="imageUrl">Image URL</Label>
            <InputElement
              id="imageUrl"
              type="text"
              placeholder="Enter the Image Url"
              value={backgroundImageUrlInput}
              onChange={this.onChangeBackgroundImgUrl}
            />

            <Label htmlFor="TopText">Top Text</Label>
            <InputElement
              id="TopText"
              type="text"
              placeholder="Enter the Top Text"
              value={topTextMemeInput}
              onChange={this.onChangeTopText}
            />

            <Label htmlFor="BottomText">Bottom Text</Label>
            <InputElement
              id="BottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              value={bottomTextMemeInput}
              onChange={this.onChangeBottomText}
            />

            <Label htmlFor="FontSize">Font Size</Label>
            <SelectElement
              id="FontSize"
              value={fontSizeInput}
              onChange={this.onChangeSelectedFontSize}
            >
              {fontSizesOptionsList.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </SelectElement>
            <GenerateButton type="submit"> Generate </GenerateButton>
          </MemsFormContainer>
          {this.renderGenerateImagewithMeme()}
        </ContentContainer>
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
